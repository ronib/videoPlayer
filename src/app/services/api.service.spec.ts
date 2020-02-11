import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';


import { ApiService } from './api.service';
import { HttpEvent } from '@angular/common/http';
import { Talk } from '../models/interfaces';
import { defer } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should get transcript data',
    inject(
      [HttpTestingController, ApiService],
      (
        httpMock: HttpTestingController,
        apiService: ApiService
      ) => {
        const mockTranscript = [
          {snippet: "Mm-hmm", speaker: "Cust", time: 1.92},
          {snippet: "Hello?", speaker: "Rep", time: 3.66},
          {snippet: "Yeah,", speaker: "Cust", time: 62.249399999999994},
          {snippet: "Hello?", speaker: "Cust", time: 63.979299999999995}
        ];
        expect(mockTranscript).toBeInstanceOf(Array);
        httpClientSpy.get.and.returnValue(asyncData(mockTranscript));

        apiService.getTranscript("id").subscribe(
          talks => {
            expect(talks).toEqual(mockTranscript, 'expected talks');
            expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        },
          fail
        );


        
      }
    )
  );
  
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}