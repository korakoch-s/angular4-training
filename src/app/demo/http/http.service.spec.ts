import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        HttpService,
        { provide: 'apiUrl', useValue: 'http://mydomain.com/api/v1/posts' },
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  // sets up an expectation that the correct URL will being requested
  function expectURL(backend: MockBackend, url: string) {
    backend.connections.subscribe(c => {
      expect(c.request.url).toBe(url);
      const response = new ResponseOptions({ body: '{"title": "post number 1"}' });
      c.mockRespond(new Response(response));
    });
  }

  describe('loadData', () => {
    it('retrive data from given url',
      inject([HttpService, MockBackend], fakeAsync((svc: HttpService, backend) => {
        let res;
        expectURL(backend, 'http://mydomain.com/api/v1/posts');
        svc.loadData().subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.title).toBe('post number 1');
      }))
    );
  });

  describe('makePost', () => {
    it('post and retrive data from given url',
      inject([HttpService, MockBackend], fakeAsync((svc: HttpService, backend: MockBackend) => {
        let res;
        // expectURL(backend, 'http://mydomain.com/api/v1/posts');
        backend.connections.subscribe(c => {
          expect(c.request.url).toBe('http://mydomain.com/api/v1/posts');
          expect(c.request._body).toBe(JSON.stringify({
            body: 'bar',
            title: 'foo',
            userId: 1
          }));
          const response = new ResponseOptions({ body: '{"id": "101"}' });
          c.mockRespond(new Response(response));
        });
        svc.makePost('foo', 'bar').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.id).toBe('101');
      }))
    );
  });

});
