import { TestBed, inject } from '@angular/core/testing';

import { LocationService } from './location.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Location } from '../modals/locations';

describe('LocationService', () => {
  let service: LocationService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });

    service = TestBed.get(LocationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify()
  })

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // })

  // it('should return search results, #searchPlaces', () => {
  //   service.searchPlaces('kisii').subscribe((result) => {
  //     expect(searchResult.results.length).toBe(2);
  //     expect(result).toEqual(searchResult);
  //   })

  //   const request = httpMock.expectOne(`${service.SEARCHURL}&q=kisii`);
  //   expect(request.request.url).toEqual('https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&result_types=place&app_id=YWt6GJ7bb5SddD29KP38&app_code=iuvgWgye0R83J44f1ESaXA&q=kisii');
  //   expect(request.request.method).toEqual('GET');
  //   expect(request.request.responseType).toEqual('json');
  //   request.flush(searchResult);
  // })

  // it('should return  city locations #getCityLocations', () => {
  //   service.getCityLocation('eldoret').subscribe((locations) => {
  //     expect(dummyLocations.length).toBe(2);
  //     expect(locations).toEqual(dummyLocations);
  //   })

  //   const request = httpMock.expectOne(`${service.SEARCHURL}&q=eldoret`);
  //   expect(request.request.method).toBe('GET');
  //   expect(request.request.url).toBe('https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&result_types=place&app_id=YWt6GJ7bb5SddD29KP38&app_code=iuvgWgye0R83J44f1ESaXA&q=eldoret');
  //   request.flush(dummyLocations);
  // })

  const searchResult = {
    "results": [
      {
        "title": "Kisii Town Hall",
        "highlightedTitle": "<b>Kisii</b> Town Hall",
        "vicinity": "B3<br/>Kisii, Kisii<br/>Kenya",
        "highlightedVicinity": "B3<br/>Kisii, Kisii<br/>Kenya",
        "position": [
          -0.67904,
          34.77365
        ],
        "category": "government-community-facility",
        "href": "https://places.cit.api.here.com/places/v1/places/404kzbsp-4a8548af521f481dbe2242a5560198d8;context=Zmxvdy1pZD1hZDE0NmEwMi03NmM5LTUwMDMtYWJlMy1mYjVhMjhmMTMwMzdfMTU0MjE4NzUzMzI4NV81MjI3XzM0NTImcmFuaz0w?app_id=YWt6GJ7bb5SddD29KP38&app_code=iuvgWgye0R83J44f1ESaXA",
        "type": "urn:nlp-types:place",
        "resultType": "place",
        "id": "404kzbsp-4a8548af521f481dbe2242a5560198d8",
        "distance": 11633511
      },
      {
        "title": "Kisii Bus Park",
        "highlightedTitle": "<b>Kisii</b> Bus Park",
        "vicinity": "B3<br/>Kisii, Kisii<br/>Kenya",
        "highlightedVicinity": "B3<br/>Kisii, Kisii<br/>Kenya",
        "position": [
          -0.67408,
          34.77059
        ],
        "category": "public-transport",
        "href": "https://places.cit.api.here.com/places/v1/places/404kzbsp-cf53d6ce68d3479ca2deef08039415d6;context=Zmxvdy1pZD1hZDE0NmEwMi03NmM5LTUwMDMtYWJlMy1mYjVhMjhmMTMwMzdfMTU0MjE4NzUzMzI4NV81MjI3XzM0NTImcmFuaz0x?app_id=YWt6GJ7bb5SddD29KP38&app_code=iuvgWgye0R83J44f1ESaXA",
        "type": "urn:nlp-types:place",
        "resultType": "place",
        "id": "404kzbsp-cf53d6ce68d3479ca2deef08039415d6",
        "distance": 11632890
      }]
  };
  const dummyLocations: Location[] = [
    {
      category: "car-rental",
      distance: 11494581,
      highlightedTitle: "<b>Eldoret</b> Shuttle",
      highlightedVicinity: "A104<br/>Malaba, Busia<br/>Kenya",
      href: "https://places.cit.api.here.com/places/v1/places/404jx7ps-c5272fa36bed0db73b9ae01b4d04c059;context=Zmxvdy1pZD03ODQ2ZTJjYS05YTYzLTVlNGUtYWVjZi05ODVjMDUxNjMzZDlfMTU0MTQxNzcwODk2Nl80NTQyXzk0NjcmcmFuaz0xOA?app_id=YWt6GJ7bb5SddD29KP38&app_code=iuvgWgye0R83J44f1ESaXA",
      id: "404jx7ps-c5272fa36bed0db73b9ae01b4d04c059",
      position: [
        0.63487,
        34.27238
      ],
      resultType: "place",
      title: "Eldoret Shuttle",
      type: "urn:nlp-types:place",
      vicinity: "A104<br/>Malaba, Busia<br/>Kenya"
    },
    {
      category: "car-rental",
      distance: 11494581,
      highlightedTitle: "<b>Eldoret</b> Shuttle",
      highlightedVicinity: "A104<br/>Malaba, Busia<br/>Kenya",
      href: "https://places.cit.api.here.com/places/v1/places/404jx7ps-c5272fa36bed0db73b9ae01b4d04c059;context=Zmxvdy1pZD03ODQ2ZTJjYS05YTYzLTVlNGUtYWVjZi05ODVjMDUxNjMzZDlfMTU0MTQxNzcwODk2Nl80NTQyXzk0NjcmcmFuaz0xOA?app_id=YWt6GJ7bb5SddD29KP38&app_code=iuvgWgye0R83J44f1ESaXA",
      id: "404jx7ps-c5272fa36bed0db73b9ae01b4d04c059",
      position: [
        0.63487,
        34.27238
      ],
      resultType: "place",
      title: "Eldoret Shuttle",
      type: "urn:nlp-types:place",
      vicinity: "A104<br/>Malaba, Busia<br/>Kenya"
    }
  ];

});
