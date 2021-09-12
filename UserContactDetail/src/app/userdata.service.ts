import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  appServer!: string;
  userData:any=
  [
    {  Name:"Ali Shah",
    Designation:"Software Developer",
    Adress:"House No 17,Sector F-10/3,Islamabad",
    email:["ali@gmail.com","asghar@gmail.com"]
  },
  {  Name:"John Wilson",
    Designation:"UI Expert",
    Adress:"House No 18,Street No 15,Washington DC",
    email:["john@yahoo.com","johnwicky@gmail.com","johns@msn.com"]
  },
  {  Name:"Habib",
    Designation:"Digital Marketer",
    Adress:"House No 10,Street No 50,Setalite Town B block,Rawalpindi",
    email:["habib@gmail.com","habibsaqi@yahoo.com",
          "habibmarketer@gmail.com","habibofficial@yahoo.com"]
  },
  {  Name:"Jimi Shah",
    Designation:"Full Stack Developer",
    Adress:"House No 91,Street No 14A,Near Abdullah Mosque,Lahore",
    email:["jimi@gamil.com"]
  },
  {  Name:"Haider Khan",
    Designation:"Back end Developer",
    Adress:"House No 67,Street No 87,Clifton Karachi",
    email:["haider@gmail.com","haider@yahoo.com","haider@msn.com",
           "haoder12@gmail.com","haiderAbdullah@yahoo.com"]
  },
  {  Name:"Asghar",
    Designation:"Front end developer",
    Adress:"House No 12,Street No 13,Sector F-6/3,Islamabad",
    email:["asghar@yahoo.com","aliasghar@yahoo.com"]
  },
];

  constructor(private http: HttpClient,) { }
  //This is MockApi Call
  mockApiData(id:number){
    return this.http.get(this.appServer+"/getUserContactListDetail/true?Id"+id);
  }
}

