// --------Create prototypes

var jobList=[], empList=[], aplList=[], artList=[], eventList=[]; 

var addList =function(array){
       array.push(this);
}

function apl(id, name, address, ava, city, currentJob){
    this.id=id;
    this.name=name;
    this.dob=dob;
    this.address=address;
    this.city=city;
    this.province=province;
    this.nationality=nationality;
    this.ava=ava;
    this.currentJob=currentJob; 
    
}

function emp(id,name,logo, founded,address,city,province,nationality,latLang,field,type,size,phone,website,email,socialNet,descriptions,activity,hiring,reviews,followed){
      this.id=id;
      this.name=name;
      this.logo=logo;
      this.founded=founded;
      this.address=address; //Tên đường, quận, huyện,
      this.city=city; 
      this.province=province;
      this.nationality=nationality;
      this.latLang=latLang;      //Vị trí trên GG map
      this.field=field; //Mảng
      this.type=type;
      this.size=size;
      this.phone=phone; //Mảng: Telephone 1, Telephone HR, Hotline
      this.website=website;
      this.email=email;
      this.socialNet=socialNet; //Mảng, theo thứ tự: FB, Mes, Insta, Linkedin, Zalo, Youtube
      this.descriptions=descriptions;
      this.activity=activity; //Mảng link các hình ảnh activity và comments
      this.hiring=hiring; // mảng id các công việc đang tuyển
      this.reviews=reviews; //mảng id các reviews
      this.followed=followed; //Mảng id các applicants  và other employers followed
}

function job(empID,title,city,province,profession,field,position,gender,salary,shift,foreignLang,vacancy,otherCond,descriptions,requirements,skills,certificate,yearOfExp,benefits,viewed,applied,howToApply,posted,deadline){
      this.empID=empID;
      this.title=title;
      this.city=city;
      this.province=province;
      this.profession=profession;
      this.field=field;  //Mảng
      this.position=position;
      this.gender=gender;
      this.salary=salary;
      this.shift=shift;
      this.foreignLang=foreignLang;
      this.vacancy=vacancy;
      this.otherCond=otherCond;
      this.descriptions=descriptions;
      this.requirements=requirements;
      this.skills=skills;
      this.certificate=certificate;
      this.yearOfExp=yearOfExp;
      this.benefits=benefits;
      this.viewed=viewed;
      this.applied=applied;
      this.howToApply=howToApply;
      this.posted=posted;
      this.deadline=deadline;
 }   

function article(id,title,content,posted,author,images,viewed,reviewed){
      this.id=id;
      this.title=title;
      this.content=content;
      this.posted=posted;
      this.author=author;
      this.images=images;
      this.viewed=viewed;
      this.reviewed=reviewed;
}

function event(id,title,location,city,host,begin,last,preview,attended,follow,price,description){
      this.id=id;
      this.title=title;
      this.location=location;
      this.city=city;
      this.host=host;
      this.begin=begin;
      this.last=last;
      this.preview=preview;
      this.attended=attended;
      this.follow=follow;
      this.price=price;
      this.description=description;
}


//-------------- Create data -----------
var emp1=new emp(
      "001", 
      "Công ty TNHH Le Bonjour Job",
      "../images/employer/lebonjour/logo.png",
      "20/12/2018","12 Vũ Văn Dũng", 
      "Đà Nẵng",
      "",
      "Việt Nam",
      "16.053763, 108.201557",
      "HR company",
      "Công ty TNHH",
      "25-99",
      "0236 2474 999",
      "https://www.lebonjourjob.netlify.com",
      "lebonjourjob@gmail.com",
      ['https://www.facebook.com/LeBonjourJOB/','https://www.messenger.com/t/316196982241647'],
      "You do your business. We take care of the world.",
      ['../images/employer/lebonjour/activity1/act1.jpg',
      '../images/employer/lebonjour/activity1/act2.jpg',
      '../images/employer/lebonjour/activity1/act3.jpg',
      '../images/employer/lebonjour/activity1/act4.jpg',
      '../images/employer/lebonjour/activity1/act5.jpg',],
      ['Chuyên viên marketing tại Đà Nẵng','Kế toán tổng hợp','Quản lý dự án','Chuyên viên tuyển dụng'],
      ['review 1','review 2','review 3'],
      ['User 1','User 2','User 3']
      )
var emp2=new emp("002", "Cong ty TNHH Fast Track SE", "04/08/2017", "Lo 12, Duong so 1, KCN An Don", "Da Nang","","Viet Nam","../images/logo2.png","Education Organization","0236 3675 666")

addList.call(emp1,empList);
addList.call(emp2,empList);


var job1=new job (0,"Chuyên viên marketing online tại Đà Nẵng","Đà Nẵng","","marketing","HR company","Nhân viên","transgender","5.000.000 &#8363;", "Giờ hành chính","English, Korean","3","Nộp HS online", "Mo ta cong viec: abc","Yeu cau cong viec: abc","Kỹ năng: Microsoft Office","Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch","2+","Luong thang 13, thuong doanh so.","30","5","Nộp tại văn phòng đường 2/9","25/10/2018","30/11/2018");

addList.call(job1,jobList);

var art1=new article(
      "001",
      "Hướng dẫn kỹ năng tạo CV",
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "30/10/2018",
      "Khoa Do",
      "../images/articles/camnang.png",
      "30",
      "Good!"
      )
addList.call(art1,artList);

var event1=new event(
      "001",
      "Ngày hội tuyển dụng ngành du lịch - Khách sạn năm 2018",
      "DNC Coworking Space, 31 Tran Phu, Hai Chau, Đà Nẵng 55000",
      "Đà Nẵng",
      "Công ty TNHH Le Bonjour Job",
      "30/11/2018",
      "1",
      "../images/events/event.jpg",
      "100",
      "300",
      "Miễn phí",
      "Ngày hội tuyển dụng ngành du lịch - Khách sạn năm 2018 với sự tham gia của hơn 300 đơn vị tuyển dụng là các khách sạn - resort lớn nhỏ trên địa bàn thành phố Đà Nẵng.")

addList.call(event1,eventList);

//Push data function

function jobCard(jobObj,position,quantity1,quantity2){
      $("#"+position).empty();
            if ($( window ).width() > 576){
                  for (var i=0;i<quantity1;i++){
                        $("#"+position).append(
                  `<div class='row bg-light p-3 mx-auto col-md-6 border-bottom border-bottom-secondary jobcard rounded'>
                        <img class='mr-3 col-2 logo' src='`+ empList[jobObj.empID].logo +`' alt='Generic placeholder image'>
                              <div class='col-6 pr-0'>
                                    <h5 class='mt-0 truncate'>
                                    <a href='../employer/job_description.html'>`+ jobObj.title +`</a>
                                    </h5>
                                    <h6 class='truncate'>
                                    <a href='../employer/employer_profile.html'>`+ empList[jobObj.empID].name +`</a>
                                    </h6>
                                    <div class=''>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-money-bill-alt'></i>`+jobObj.salary+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-map-marker-alt'></i>`+jobObj.city+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-users'></i> `+jobObj.vacancy+`<i class='fas fa-`+jobObj.gender+`'></i>
                                          </div>
                                    </div>
                              </div>
                              <div class='col-3'>
                                    <p class='border border-secondary deadline text-center'>Hạn cuối: `+ jobObj.deadline +`</p>
                                    <button class='btn btn__sn--sm bg-primary px-0 py-0' type='button'>
                                          <a href='https://www.facebook.com/LeBonjourJOB/'><i class='fas fa-bookmark'></i> Lưu</a>
                                    </button>
                                    <a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flebonjourjob.netlify.com%2F&amp;src=sdkpreparse' class='fb-xfbml-parse-ignore btn btn__sn btn__sn--sm btn__sn--fb w-100 px-1'>
                                          <i class='fab fa-facebook'></i> Share 
                                    </a>
                              </div>
                              
                  </div>`
                  )   
                  }
                   
            } else {
                  for (var i=0;i<quantity2;i++){
                        $("#"+position).append(
                  `<div class='row bg-light p-3 pb-5 col-md-6 mx-auto border-bottom border-bottom-secondary jobcard rounded'>
                        <img class='mr-3 col-4 logo' src='`+ empList[jobObj.empID].logo +`' alt='Generic placeholder image'>
                              
                              <div class='col-6'>
                                    <p class='border border-secondary deadline text-center'>Hạn cuối: `+ jobObj.deadline +`</p>
                                    <button class='btn btn__sn--sm bg-primary px-0 py-0' type='button'>
                                          <a href='https://www.facebook.com/LeBonjourJOB/'><i class='fas fa-bookmark'></i> Lưu</a>
                                    </button>
                                    <a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flebonjourjob.netlify.com%2F&amp;src=sdkpreparse' class='fb-xfbml-parse-ignore btn btn__sn btn__sn--sm btn__sn--fb w-100 px-1'>
                                          <i class='fab fa-facebook'></i> Share 
                                    </a>
                              </div>
                              <div class='col-12 pr-0'>
                                    <h5 class='mt-0 truncate'>
                                    <a href='../employer/job_description.html'>`+ jobObj.title +`</a>
                                    </h5>
                                    <h6 class='truncate'>
                                    <a href='../employer/employer_profile.html'>`+ empList[jobObj.empID].name +`</a>
                                    </h6>
                                    <div class=''>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-money-bill-alt'></i> `+jobObj.salary+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-map-marker-alt'></i> `+jobObj.city+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-users'></i> `+jobObj.vacancy+` <i class='fas fa-`+jobObj.gender+`'></i>
                                          </div>
                                    </div>
                              </div>
                  </div>`
                        )   
                        }
            }

//       $( window ).resize(function() {
//             jobCard(jobObj,position,quantity1,quantity2)
//     });
};

function vipCard(empObj,position,quantity1,quantity2){
      
            $("#"+position).empty();
            if ($( window ).width() > 576){
                  var quantity=quantity1, hirings=4;
            } else {
                  var quantity=quantity2, hirings=2;
            }
            for (var i=0;i<quantity;i++){
                  $("#"+position).append(`
                  <div class='col-6 col-md-3 mt-4'>
                  <div class='card employer__vip'>
                        <img class='card-img-top w-75 h-25 align-self-center' src='`+ empObj.logo +`'
                              alt=' `+empObj.name+` logo'>
                        <div class='card-body py-2'>
                              <a href='../employer/employer_profile.html'>
                                    <h5 class='card-title text-center'>`+empObj.name+`</h5>
                              </a>
                              <p class='card-text text-center'><i class='fas fa-map-marker-alt'></i> `+empObj.city+`</p>
                              <h6 class="d-sm-none d-md-block">Công việc đang tuyển:</h6>
                              <ul class='d-sm-none d-md-block list-group list-group-flush'>`+
                              hiring(empObj.hiring,hirings) 
                              +`
                              </ul>
                        </div>
                        <div class='card-footer py-1'>
                              <small class='text-muted'>Last updated 3 mins ago</small>
                        </div>
                  </div>
            </div>
                  `
                  )   
            } 
      //       $( window ).resize(function() {
      //             vipCard(empObj,position,quantity1,quantity2)
      //     });
};
      function hiring(params,hirings) {
            str = '';
            for(let i=0;i<hirings;i++){
                  str += `<li class='list-group-item p-1 text-truncate'><a href='../shared/main_job.html'>`+params[i]+`</a></li>`
            };
            return  str;
      }


function carouselNav(quantity){
      let str = '<li data-target="#carInd" data-slide-to="0" class="active bg-primary"></li>';
      for (var i=1;i<Math.ceil(quantity/3);i++)
      {str += `<li data-target="#carInd" data-slide-to="`+i+`"class="bg-primary"></li>`
      };
      console.log(str)
      // console.log(quantity%3+1)
      str+=`</ol>
      <div class="carousel-inner">
            <div class="carousel-item active">
                  <div class="card-body">
                        <div class="card-group">
                              
                              
                        </div>
                  </div>
            </div>
      </div>`;
      for (var i=1;i<Math.ceil(quantity/3);i++){
            str+=`<div class="carousel-inner">
                        <div class="carousel-item">
                              <div class="card-body">
                                    <div class="card-group">
                                    </div>
                              </div>
                        </div>
                  </div>`
      }
      return str;
      
}
function carouselItem(artObj,items){
      let str=""
            for (var i=0;i<items;i++){
            str+=`<div class="card">
                        <img class="card-img-top align-self-center w-75 h-50" src="`+artObj.images+`" alt="Card image cap">
                        <div class="card-body">
                              <h5 class="card-title">`+artObj.title+`</h5>
                              <p class="card-text text-truncate">`+artObj.content+`.</p>
                        </div>
                        <div class="card-footer">
                              <small class="text-muted">Last updated `+artObj.posted+`</small>
                        </div>
                  </div>`
            }
            return str;

}
function articleCard(artObj,position,quantity){
      $("#"+position).empty();
            if ($(window ).width() > 576){
                  var items=3;
            } else {
                  var items=1;
            }
      $("#"+position).append(`
            <div id="carInd" class="carousel slide w-100" data-ride="carousel">
                  <ol class="carousel-indicators">`+
                  carouselNav(quantity)+
                  `<a class="carousel-control-prev" href="#carInd" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon bg-primary"></span>
                  </a>
                  <a class="carousel-control-next" href="#carInd" role="button" data-slide="next">
                        <span class="carousel-control-next-icon bg-primary"></span>
                  </a>
            </div>
            `
            )  
      $(".card-group").append(carouselItem(artObj,items))
//       $(window ).resize(function() {
//             articleCard(artObj,position,quantity)
//     });
       
}

function eventCard(eventObj,position,quantity1,quantity2){
      $("#"+position).empty();
      if ($( window ).width() > 576){
            $("#"+position).append(`
                  <div class="d-none d-md-inline col-md-4 py-3">
                  </div>`)
      for (var i=0;i<quantity1;i++){
            $("#"+position).append(`
            <div class="col-12 col-md-4 py-3">
                  <div class="card event__card">
                        <div class="row p-0 text-dark">
                              <div class="col-md-3 border-right border-right-primary event__card__date">
                                    <span class="event__card__day">
                                          T`+eventObj.begin.substring(3, 5)+`
                                    </span>
                                    <span class="event__card__month">
                                          `+eventObj.begin.substring(0, 2)+`
                                    </span>
                              </div>
                              <div class="col-md-9">
                                    <img class="d-none d-md-inline card-img-top" src="`+eventObj.preview+`" alt="`+eventObj.title+`">
                              </div>

                        </div>
                        <div class="row">
                              <div class="col-md-8 pl-5 pb-4">
                                    <a href="../shared/constructing.html" title="`+eventObj.title+`">
                                          <h5 class="card-title text-left text-truncate">`+eventObj.title+`</h5>
                                    </a>
                                    <a href="../employer/employer_profile.html" title="`+eventObj.host+`">
                                          <p class="card-text text-left">`+eventObj.host+`</p>
                                    </a>

                              </div>
                              <div class="col-md-3 px-0">
                                    <input class="event__follow__check" id="event`+eventObj.id+`" type="checkbox">
                                    <button type="button" class="btn btn__sn--sm p-0 px-2 event__follow__button event`+eventObj.id+`">
                                          <label for="event`+eventObj.id+`Check" class="p-0 m-0">
                                                <i class="far fa-star"></i> Follow
                                          </label>
                                    </button>
                                    <button type="button" class="btn btn__sn--sm btn__sn--fb p-0 px-2">
                                          <i class="fab fa-facebook-square"></i> Share <span
                                                class="badge badge-light">4</span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>

            `
            )   
      }
            } else {
                  for (var i=0;i<quantity2;i++){
                        $("#"+position).append(`
                        <div class="col-12 col-md-4 py-3">
                              <div class="card event__card">
                                    <div class="row p-0 text-dark">
                                          <div class="col-5 border-right border-right-primary event__card__date">
                                                <span class="event__card__day">
                                                      T`+eventObj.begin.substring(3, 5)+`
                                                </span>
                                                <span class="event__card__month">
                                                      `+eventObj.begin.substring(0, 2)+`
                                                </span>
                                          </div>
                                          <div class="col-7 px-0">
                                                <input class="event__follow__check" id="event`+eventObj.id+`" type="checkbox">
                                                <button type="button" class="btn btn__sn--sm p-0 px-2 mt-3 event__follow__button event`+eventObj.id+`">
                                                      <label for="event`+eventObj.id+`Check" class="p-0 m-0">
                                                            <i class="far fa-star"></i> Follow
                                                      </label>
                                                </button>
                                                <button type="button" class="btn btn__sn btn__sn--sm btn__sn--fb p-0 px-2">
                                                      <i class="fab fa-facebook-square"></i> Share <span
                                                            class="badge badge-light">4</span>
                                                </button>
                                          </div>
                                          <div class="col-12 pl-5 pb-4">
                                                <a href="../shared/constructing.html" title="`+eventObj.title+`">
                                                      <h5 class="card-title text-left text-truncate">`+eventObj.title+`</h5>
                                                </a>
                                                <a href="../employer/employer_profile.html" title="`+eventObj.host+`">
                                                      <p class="card-text text-left">`+eventObj.host+`</p>
                                                </a>
            
                                          </div>
                                          
                                    </div>
                              </div>
                        </div>
            
                        `
                        )   
                  }
            }
      
//       $(window ).resize(function() {
//             eventCard(eventObj,position,quantity1,quantity2)
//     }); 
}