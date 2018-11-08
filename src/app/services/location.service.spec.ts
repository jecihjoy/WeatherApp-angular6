import { TestBed, inject } from '@angular/core/testing';

import { LocationService } from './location.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '../modals/locations';
describe('LocationService', () => {
  let service: LocationService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });

    service = TestBed.get(LocationService);
  });

  it('should retutn a list of locatiions', () => {
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

    service.getCityLocation('eldoret').subscribe((locations) => {
      expect(this.dummyLocations.length).toBe(2);
      expect(locations).toEqual(dummyLocations);
    })
  })

});
