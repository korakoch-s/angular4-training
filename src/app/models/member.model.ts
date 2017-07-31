import { BasedModel } from './based.model';

export class Member extends BasedModel {
    public _id: string;
    public index: number;
    public guid: string;
    public isActive: boolean;
    public age: number;
    public fname: string;
    public lname: string;
    public gender: string;
    public email: string;
    public phone: string;
    public address: string;
    public registered: Date;
    public latitude: number;
    public longitude: number;
    public tags: string[];
    public rating: number;
    public imageProfile: string;

    public static GetMockData(): Member[] {
        return GetMockMemberData();
    }
}

export const GetMockMemberData = (): Member[] => {
    const members = new Array<Member>();
    members.push({
        '_id': '597ac1efa57cb9bb67480eeb',
        'index': 0,
        'guid': '8af2e354-a0ae-4c9e-8681-78e4b08f15df',
        'isActive': true,
        'age': 45,
        'fname': 'Erma',
        'lname': 'Bailey',
        'gender': 'female',
        'email': 'ermabailey@waretel.com',
        'phone': '+1 (982) 475-2433',
        'address': '273 Holmes Lane, Lewis, California, 7797',
        'registered': new Date('2017-03-05T06:21:44 -07:00') ,
        'latitude': 41.813252,
        'longitude': 148.726868,
        'tags': [
            'commodo',
            'id',
            'id',
            'reprehenderit',
            'cupidatat',
            'dolor',
            'incididunt'
        ],
        'rating': 6,
        'imageProfile': 'http://lorempixel.com/200/200/abstract',
        ToString: () => {
            return JSON.stringify(this);
        }
    });
    members.push({
        '_id': '597ac1ef8ee12331af84a604',
        'index': 1,
        'guid': 'd947d259-22e6-4f06-b0dd-1ef4e0f10324',
        'isActive': false,
        'age': 44,
        'fname': 'Joanna',
        'lname': 'Gordon',
        'gender': 'female',
        'email': 'joannagordon@waretel.com',
        'phone': '+1 (853) 491-3831',
        'address': '720 Nassau Avenue, Odessa, Alaska, 7955',
        'registered': new Date('2016-11-12T04:39:50 -07:00'),
        'latitude': 41.30338,
        'longitude': -11.087471,
        'tags': [
            'officia',
            'qui',
            'occaecat',
            'laborum',
            'id',
            'in',
            'magna'
        ],
        'rating': 9,
        'imageProfile': 'http://lorempixel.com/200/200/abstract',
        ToString: () => {
            return JSON.stringify(this);
        }
    });

    members.push({
        '_id': '597ac1ef7d97ca0117e931ee',
        'index': 2,
        'guid': 'bf7b22d9-e891-41ec-b34f-d0defae93663',
        'isActive': true,
        'age': 23,
        'fname': 'Rush',
        'lname': 'Howe',
        'gender': 'male',
        'email': 'rushhowe@waretel.com',
        'phone': '+1 (846) 448-2665',
        'address': '474 Congress Street, Malo, Tennessee, 6648',
        'registered': new Date('2016-09-04T05:48:03 -07:00'),
        'latitude': 23.153066,
        'longitude': 167.280009,
        'tags': [
            'adipisicing',
            'eu',
            'fugiat',
            'pariatur',
            'consectetur',
            'eiusmod',
            'do'
        ],
        'rating': 10,
        'imageProfile': 'http://lorempixel.com/200/200/abstract',
        ToString: () => {
            return JSON.stringify(this);
        }
    });

    return members;
}
