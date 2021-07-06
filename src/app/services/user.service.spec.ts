import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  var service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(UserService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy()
    // expect(1).toBe(1);
  });

  it('should get all users',async (done) => {
    await service.getAllUsers()
    .subscribe(res => {
      expect(Object.keys(res[0])).toContain("name");
      done();
    })
  })
});
