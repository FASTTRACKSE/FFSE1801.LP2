// --------Create prototypes

var jobList=[], empList=[], aplList=[], artList=[], eventList=[]; 

var addList =function(array){
       array.push(this);
}

function apl(id, name,dob, address, city, province,nationality,ava,phone,email,aboutme,currentJob){
      this.id=id;
      this.name=name;
      this.dob=dob;
      this.address=address;
      this.city=city;
      this.province=province;
      this.nationality=nationality;
      this.ava=ava;
      this.phone=phone;
      this.email=email;
      this.aboutme=aboutme;
      this.currentJob=currentJob;   
  }

function emp(id,name,logo, founded,address,city,province,nationality,latLang,field,type,size,phone,website,email,socialNet,descriptions,detailDes,banner,activity,hiring,reviews,followed){
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
      this.detailDes=detailDes;
      this.banner=banner;
      this.activity=activity; //Mảng link các hình ảnh activity và comments
      this.hiring=hiring; // mảng id các công việc đang tuyển
      this.reviews=reviews; //mảng id các reviews
      this.followed=followed; //Mảng id các applicants  và other employers followed
}

function job(empID,id,title,city,province,profession,field,position,gender,salary,shift,foreignLang,vacancy,otherCond,descriptions,requirements,skills,certificate,yearOfExp,benefits,viewed,applied,howToApply,posted,deadline){
      this.empID=empID;
      this.id=id
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
var apl1=new apl(
      "001",
      "Khoa Do",
      "13/08/1993",
      "Phuong Phuoc My, Son Tra",
      "Da Nang",
      "",
      "Viet Nam",
      "../images/applicant/ava1.jpg",
      "079 208 3481",
      "trongkhoa93.due@gmail.com",
      "A tech lover and problem solver.",
      "Software Engineer"
)
var emp1=new emp(
      "001", 
      "Công ty TNHH Le Bonjour Job",
      "../images/employer/001/logo.png",
      "20/12/2018","12 Vũ Văn Dũng", 
      "Đà Nẵng",
      "",
      "Việt Nam",
      "16.053763, 108.201557",
      "HR company",
      "Công ty TNHH",
      "25-99",
      ["0236 2474 999",'',''],
      "https://www.lebonjourjob.netlify.com",
      "lebonjourjob@gmail.com",
      ['https://www.facebook.com/LeBonjourJOB/','https://www.messenger.com/t/316196982241647'],
      "Là công ty tiên phong trong việc áp dụng những kỹ thuật tiên tiến nhất về thu thập và xử lý dữ liệu, Le Bonjour Job tự hào là nhà cung cấp giải pháp toàn diện về các vấn đề nhân sự, quản lý đội ngũ, tìm kiếm nhân tài. Chúng tôi tự tin sẽ luôn đáp ứng những đòi hỏi khắt khe nhất của bạn.",
      "Là công ty tiên phong trong việc áp dụng những kỹ thuật tiên tiến nhất về thu thập và xử lý dữ liệu, Le Bonjour Job tự hào là nhà cung cấp giải pháp toàn diện về các vấn đề nhân sự, quản lý đội ngũ, tìm kiếm nhân tài. Chúng tôi tự tin sẽ luôn đáp ứng những đòi hỏi khắt khe nhất của bạn.",
      ['../images/employer/001/banner1.jpg',
      '../images/employer/001/banner2.jpg',
      '../images/employer/001/banner3.jpg'],
      ['../images/employer/001/activity/act1.jpg',
      '../images/employer/001/activity/act2.jpg',
      '../images/employer/001/activity/act3.jpg',
      '../images/employer/001/activity/act4.jpg',
      '../images/employer/001/activity/act5.jpg'],
      ['Chuyên viên marketing tại Đà Nẵng','Kế toán tổng hợp','Quản lý dự án','Chuyên viên tuyển dụng'],
      ['review 1','review 2','review 3'],
      ['User 1','User 2','User 3']
      )
var emp2=new emp(
      "002", 
      "Công ty Cổ phần Vinpearl",
      "../images/employer/002/logo.jpeg",
      "25/07/2001",
      "Tòa nhà A - Tập đoàn Vingroup, Số 7 đường Bằng Lăng 1, KĐT sinh thái Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, ", 
      "Hà Nội",
      "",
      "Việt Nam",
      "12.2172171,109.2435189",
      "Đầu tư, kinh doanh dịch vụ du lịch và bất động sản",
      "Công ty cổ phần",
      "1.000 - 4.999",
      ['84 58 3 590 611','(+84) 1900 636 699',''],
      "http://www.vinpearl.com",
      "info@vinpearl.com",
      ['https://www.facebook.com/Vinpearl/',''],
      "Tập đoàn khách sạn dẫn đầu tại Việt Nam, Vinpearl mang đến các thương hiệu riêng và kiến tạo nên hành trình trải nghiệm nghỉ dưỡng hoàn hảo và mới lạ. ",
      "Vinpearl là dịch vụ nghỉ dưỡng và giải trí mang đẳng cấp 5 sao quốc tế tại các miền di sản UNESCO, nằm trải dọc bờ biển của Việt Nam – nơi những bãi biển xinh đẹp nổi tiếng nhất thế giới, hay những khách sạn 5 sao – biểu tượng của sự thịnh vượng tại mỗi thành phố lớn tại Việt Nam mà Vinpearl có mặt. Vinpearl còn là sự kết hợp hoàn hảo giữa kỳ hội họp và nghỉ dưỡng cho cảm hứng sáng tạo thăng hoa.",
      ['../images/employer/002/banner1.jpg',
      '../images/employer/002/banner2.jpg',
      '../images/employer/002/banner3.jpg'],
      ['../images/employer/002/activity/act1.jpg',
      '../images/employer/002/activity/act2.jpg',
      '../images/employer/002/activity/act3.jpg',
      '../images/employer/002/activity/act4.jpg',
      '../images/employer/002/activity/act5.jpg'],
      ['Chuyên viên marketing tại Đà Nẵng','Kế toán tổng hợp','Quản lý dự án','Chuyên viên tuyển dụng'],
      ['review 1','review 2','review 3'],
      ['User 1','User 2','User 3']
      )

var emp3=new emp(
      "003", 
      "Hyatt Regency - Resort & Hotel Danang",
      "../images/employer/003/logo.png",
      "25/07/2001",
      "5 Truong Sa Street, Hoa Hai Ward, Ngu Hanh Son District", 
      "Đà Nẵng",
      "",
      "Việt Nam",
      "16.0251406,108.202139",
      "Đầu tư, kinh doanh dịch vụ du lịch và bất động sản",
      "Công ty cổ phần",
      "1.000 - 4.999",
      ['0236 3981 234','',''],
      "https://goo.gl/3sGcsg",
      "danang.regency@hyatt.com",
      ['https://www.facebook.com/HyattRegencyDanang/',''],
      "Memorable Luxury Beach Resorts Da Nang, Vietnam.",
      "Situated on a tranquil stretch of white sandy beach, at the gateway to the vibrant city of Danang, Hyatt Regency Danang Resort and Spa is an ideal base to explore the exotic charms of Central Vietnam no matter the occasion, from meetings and events to memorable family vacations.",
      ['../images/employer/003/banner1.jpg',
      '../images/employer/003/banner2.jpg',
      '../images/employer/003/banner3.jpg'],
      ['../images/employer/003/activity/act1.jpg',
      '../images/employer/003/activity/act2.jpg',
      '../images/employer/003/activity/act3.jpg',
      '../images/employer/003/activity/act4.jpg',
      '../images/employer/003/activity/act5.jpg'],
      ['Chuyên viên marketing tại Đà Nẵng','Kế toán tổng hợp','Quản lý dự án','Chuyên viên tuyển dụng'],
      ['review 1','review 2','review 3'],
      ['User 1','User 2','User 3']
      )
var emp4=new emp(
      "004", 
      "Công ty CP TĐ Mặt trời - CN Đà Nẵng",
      "../images/employer/004/logo.jpg",
      "25/07/2001",
      "9th Floor - ACB Tower Building218 Bach Dang Str., Hai Chau Dist.", 
      "Đà Nẵng",
      "",
      "Việt Nam",
      "16.0646667,108.2217609",
      "Đầu tư, kinh doanh dịch vụ du lịch và bất động sản",
      "Công ty cổ phần",
      "1.000 - 4.999",
      "84 58 3 590 611",
      "http://www.sungroup.com.vn/home/vi",
      "info@vinpearl.com",
      ['',''],
      "Tập đoàn Sun Group được thành lập tại Việt Nam năm 2007, tập trung hoạt động trong 4 lĩnh vực chính: Du lịch nghỉ dưỡng, Vui chơi giải trí, Bất động sản cao cấp, Đầu tư hạ tầng",
      "Sứ mệnh: Kiên định với tiêu chí Chất lượng – Đẳng cấp – Sự khác biệt, mục tiêu của Sun Group là kiến tạo những công trình, sản phẩm và dịch vụ đẳng cấp, mang dấu ấn vượt thời gian, góp phần nâng cao vị thế đất nước, nâng cao chất lượng sống cho người dân và làm đẹp cho vùng đất mà Sun Group đặt chân tới. Sun Group mong muốn xây dựng một thương hiệu Việt uy tín, đẳng cấp, góp phần đưa Việt Nam trở thành điểm đến hấp dẫn của thế giới.",
      ['../images/employer/004/banner1.jpg',
      '../images/employer/004/banner2.jpg',
      '../images/employer/004/banner3.jpg'],
      ['../images/employer/004/activity/act1.jpg',
      '../images/employer/004/activity/act2.jpg',
      '../images/employer/004/activity/act3.jpg',
      '../images/employer/004/activity/act4.jpg',
      '../images/employer/004/activity/act5.jpg'],
      ['Chuyên viên marketing tại Đà Nẵng','Kế toán tổng hợp','Quản lý dự án','Chuyên viên tuyển dụng'],
      ['review 1','review 2','review 3'],
      ['User 1','User 2','User 3']
      )

addList.call(emp1,empList);
addList.call(emp2,empList);
addList.call(emp3,empList);
addList.call(emp4,empList);

var job1=new job (
      0,
      "001",
      "Chuyên viên marketing online tại Đà Nẵng",
      "Đà Nẵng",
      "",
      "marketing",
      "HR company",
      "Nhân viên",
      "transgender",
      "5.000.000 &#8363;", 
      "Giờ hành chính",
      "English, Korean",
      "3",
      "Nộp HS online", 
      "Mo ta cong viec: abc",
      "Yeu cau cong viec: abc",
      "Kỹ năng: Microsoft Office",
      "Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch",
      "2+",
      "Luong thang 13, thuong doanh so.",
      "30",
      "5",
      "Nộp tại văn phòng đường 2/9",
      "25/10/2018",
      "30/11/2018");

var job2=new job (
      1,
      "002",
      "Trưởng phòng marketing online tại Đà Nẵng",
      "Đà Nẵng",
      "",
      "marketing",
      "HR company",
      "Nhân viên",
      "transgender",
      "5.000.000 &#8363;", 
      "Giờ hành chính",
      "English, Korean",
      "3",
      "Nộp HS online", 
      "Mo ta cong viec: abc",
      "Yeu cau cong viec: abc",
      "Kỹ năng: Microsoft Office",
      "Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch",
      "2+",
      "Luong thang 13, thuong doanh so.",
      "30",
      "5",
      "Nộp tại văn phòng đường 2/9",
      "25/10/2018",
      "30/11/2018");
var job3=new job (
      2,
      "003",
      "Giám đốc marketing online tại Đà Nẵng",
      "Đà Nẵng",
      "",
      "marketing",
      "HR company",
      "Nhân viên",
      "transgender",
      "5.000.000 &#8363;", 
      "Giờ hành chính",
      "English, Korean",
      "3",
      "Nộp HS online", 
      "Mo ta cong viec: abc",
      "Yeu cau cong viec: abc",
      "Kỹ năng: Microsoft Office",
      "Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch",
      "2+",
      "Luong thang 13, thuong doanh so.",
      "30",
      "5",
      "Nộp tại văn phòng đường 2/9",
      "25/10/2018",
      "30/11/2018");
var job4=new job (
      3,
      "004",
      "Thực tập sinh marketing online tại Đà Nẵng",
      "Đà Nẵng",
      "",
      "marketing",
      "HR company",
      "Nhân viên",
      "transgender",
      "5.000.000 &#8363;", 
      "Giờ hành chính",
      "English, Korean",
      "3",
      "Nộp HS online", 
      "Mo ta cong viec: abc",
      "Yeu cau cong viec: abc",
      "Kỹ năng: Microsoft Office",
      "Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch",
      "2+",
      "Luong thang 13, thuong doanh so.",
      "30",
      "5",
      "Nộp tại văn phòng đường 2/9",
      "25/10/2018",
      "30/11/2018");
var job5=new job (
      0,
      "005",
      "Trợ lý giám đốc marketing online tại Đà Nẵng",
      "Đà Nẵng",
      "",
      "marketing",
      "HR company",
      "Nhân viên",
      "transgender",
      "5.000.000 &#8363;", 
      "Giờ hành chính",
      "English, Korean",
      "3",
      "Nộp HS online", 
      "Mo ta cong viec: abc",
      "Yeu cau cong viec: abc",
      "Kỹ năng: Microsoft Office",
      "Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch",
      "2+",
      "Luong thang 13, thuong doanh so.",
      "30",
      "5",
      "Nộp tại văn phòng đường 2/9",
      "25/10/2018",
      "30/11/2018");
var job6=new job (
      1,
      "006",
      "Quản lý marketing online tại Đà Nẵng",
      "Đà Nẵng",
      "",
      "marketing",
      "HR company",
      "Nhân viên",
      "transgender",
      "5.000.000 &#8363;", 
      "Giờ hành chính",
      "English, Korean",
      "3",
      "Nộp HS online", 
      "Mo ta cong viec: abc",
      "Yeu cau cong viec: abc",
      "Kỹ năng: Microsoft Office",
      "Cử nhân Đại học ngành QTKD, marketing, Quản trị du lịch",
      "2+",
      "Luong thang 13, thuong doanh so.",
      "30",
      "5",
      "Nộp tại văn phòng đường 2/9",
      "25/10/2018",
      "30/11/2018");

addList.call(job1,jobList);
addList.call(job2,jobList);
addList.call(job3,jobList);
addList.call(job4,jobList);
addList.call(job5,jobList);
addList.call(job6,jobList);


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
      "12 Vũ Văn Dũng",
      "Đà Nẵng",
      "Công ty TNHH Le Bonjour Job",
      "30/11/2018",
      "1",
      "../images/events/event1.jpg",
      "100",
      "300",
      "Miễn phí",
      "Ngày hội tuyển dụng ngành du lịch - Khách sạn năm 2018 với sự tham gia của hơn 300 đơn vị tuyển dụng là các khách sạn - resort lớn nhỏ trên địa bàn thành phố Đà Nẵng."
      )

var event2=new event(
      "002",
      "Google Cloud Platform Seminar in Da Nang",
      "DNC - Danang Coworking Space, 31 Tran Phu, Hai Chau,",
      "Đà Nẵng",
      "DNC - Danang Coworking Space",
      "23/11/2018",
      "1",
      "../images/events/event2.jpg",
      "100",
      "300",
      "Miễn phí",
      "Sự kiện 'Ứng dụng Google Cloud Platform trong doanh nghiệp' tại Tp. Đà Nẵng ngày 23/11/2018 sẽ giới thiệu đến các bạn kiến thức tổng quan về Google Cloud Platform và những ưu điểm của Google Cloud tại Việt Nam. <br> Sự kiện sẽ giúp cho doanh nghiệp hiểu rõ hơn về nền tảng Google Cloud, từ đó giúp Doanh nghiệp có thể vận dụng để tạo ra những giá trị kinh doanh mới cho mình trong thời kỳ 4.0."
      )
var event3=new event(
      "003",
      "Nâng cao kỹ năng kỹ thuật số cho DN qua Google (tháng 11)",
      "Tầng 2, 35 Thái Phiên, Hải Châu",
      "Đà Nẵng",
      "VCCI Đà Nẵng",
      "17/11/2018",
      "8",
      "../images/events/event3.jpg",
      "50",
      "120",
      "Miễn phí",
      "Digital 4.0 là một chương trình phi lợi nhuận của Google nhằm hỗ trợ nâng cao kỹ năng về kĩ thuật số cho doanh nghiệp tại Việt Nam, hướng tới sự tăng trưởng kinh tế và tài chính. Đây là một dự án hoàn toàn vì cộng đồng doanh nghiệp Việt Nam."
      )
var event4=new event(
      "004",
      "Techfest Vietnam 2018: Triển lãm khởi nghiệp - Exhibition",
      "Ariyana Convention Centre Danang, 107 Vo Nguyen Giap",
      "Đà Nẵng",
      "Edtech - Techfest Vietnam 2018",
      "29/11/2018",
      "3",
      "../images/events/event4.jpg",
      "150",
      "200",
      "Miễn phí",
      "Triển lãm gian hàng khởi nghiệp Việt Nam và quốc tế là một trong những hoạt động hấp dẫn nhất của Techfest 2018. <br>Khu vực triển lãm bao gồm quầy trưng bày sản phẩm dịch vụ của khoảng hơn 200 doanh nghiệp khởi nghiệp tiềm năng và các tổ chức hỗ trợ khởi nghiệp, mở cửa liên tục trong suốt sự kiện. <br>Các startup còn có thể đăng ký tham gia vào hệ thống các gian hàng MIỄN PHÍ."
      )
var event5=new event(
      "005",
      "GDG DevFest MienTrung 2018",
      "Công viên phần mềm Đà Nẵng, Đường Quang Trung",
      "Đà Nẵng",
      "Google Developer Group Mien Trung",
      "30/11/2018",
      "3",
      "../images/events/event5.jpg",
      "100",
      "300",
      "Miễn phí",
      "Sau bao ngày chờ đợi thì sự kiện được cả cộng đồng lập trình viên Miền Trung mong chờ - DevFest 2018 đã chính thức khởi động. 3 năm không phải là một chặng đường dài nhưng đủ để GDG MienTrung tự hào rằng đã kết nối rất nhiều thế hệ lập trình viên trong và ngoài khu vực để cùng nhau học hỏi và chia sẻ giá trị.<br><br> DevFest 2018 sẽ diễn ra trong 3 ngày, gồm 2 nội dung chính là Cuộc thi Hackathon và Ngày hội trình diễn công nghệ Demoday."
      )
addList.call(event1,eventList);
addList.call(event2,eventList);
addList.call(event3,eventList);
addList.call(event4,eventList);
addList.call(event5,eventList);

// LocalStorage

if(typeof(Storage) !== "undefined") {
      function search(id, myArray){
            var newArr=[]
            for (var i=0; i < myArray.length; i++) {
            if (myArray[i].id === id) {
            return myArray[i];
            }
            }
          }
      var countCheckedEvents = function() {
            var listEventsFollowed =[]; 
            // localStorage.removeItem('listEventsFollowed');
            var n = $( "input.event__follow__check:checked" );
            $.each(n,function(ind,val){
            listEventsFollowed.push($(val).attr('id'));
            })
            localStorage.setItem('listEventsFollowed', JSON.stringify(listEventsFollowed));
            // return n.length;
      };

      function getFollowedEvents(){
            var eventFollowedObj=[]
            listEventsFollowed=JSON.parse(localStorage.getItem("listEventsFollowed"));
                  $.each(listEventsFollowed,function(ind,val){
                  let id=val.substring(5,8);
                  eventFollowedObj.push(search(id,eventList)); 
                  })
                  // console.log(eventFollowedObj)
                    return (eventFollowedObj);;
      }

      var countCheckedJobs = function() {
            var listJobsFollowed =[]; 
            // localStorage.removeItem('listEventsFollowed');
            var n = $( "input.job__follow__check:checked" );
            $.each(n,function(ind,val){
                  listJobsFollowed.push($(val).attr('id'));
            })
            localStorage.setItem('listJobsFollowed', JSON.stringify(listJobsFollowed));
            // return n.length;
      };

      function getFollowedJobs(){
            var jobFollowedObj=[]
            listJobsFollowed=JSON.parse(localStorage.getItem("listJobsFollowed"));
                  $.each(listJobsFollowed,function(ind,val){
                  let id=val.substring(3,6);
                  console.log(id)
                  jobFollowedObj.push(search(id,jobList)); 
                  })
                  console.log(jobFollowedObj)
                    return (jobFollowedObj);;
      }
  





  } else {
    console.log("Trình duyệt không hỗ trợ Local storage.");
  }




//Push data function

function jobCard(jobArr,position,quantity1,quantity2){
            $("#"+position).empty();
            if ($( window ).width() > 576){
            for (var i=0;i<quantity1;i++){
            console.log(quantity1)
            console.log(jobArr[i])
            if(jobArr[i]!=undefined){
                  var checked="";
                  $.each(getFollowedJobs(),function(ind,val){
                        if(jobArr[i]===val){checked='checked'}
                  })

                  $("#"+position).append(
                  `<div class='row bg-light p-3 mx-auto col-md-6 border-bottom border-bottom-secondary jobcard rounded'>
                        <img class='mr-3 col-2 logo' src='`+ empList[jobArr[i].empID].logo +`' alt='Generic placeholder image'>
                              <div class='col-6 pr-0'>
                                    <h5 class='mt-0 truncate'>
                                    <a href='../employer/job_description.html'>`+ jobArr[i].title +`</a>
                                    </h5>
                                    <h6 class='truncate'>
                                    <a href='../employer/employer_profile.html'>`+ empList[jobArr[i].empID].name +`</a>
                                    </h6>
                                    <div class=''>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-money-bill-alt'></i> `+jobArr[i].salary+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-map-marker-alt'></i> `+jobArr[i].city+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-users'></i> `+jobArr[i].vacancy+` <i class='fas fa-`+jobArr[i].gender+`'></i>
                                          </div>
                                    </div>
                              </div>
                              <div class='col-3'>
                                    <p class='border border-secondary deadline text-center'>Hạn cuối: `+ jobArr[i].deadline +`</p>

                                    <input class="job__follow__check" id="job`+jobArr[i].id+`Check" `+ checked +` type="checkbox">
                                    <button type="button" class="btn btn__sn--sm px-0 py-0 job__follow__button job`+jobArr[i].id+`">
                                          <label for="job`+jobArr[i].id+`Check" class="p-0 m-0">
                                          <i class='fas fa-bookmark'></i> Lưu
                                          </label>
                                    </button>
                                    
                                    <a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flebonjourjob.netlify.com%2F&amp;src=sdkpreparse' class='fb-xfbml-parse-ignore btn btn__sn btn__sn--sm btn__sn--fb w-100 px-1'>
                                          <i class='fab fa-facebook'></i> Share 
                                    </a>
                              </div>
                              
                  </div>`
                  )   
                  }
            }      
            } else {
                  for (var i=0;i<quantity2;i++){
                        $("#"+position).append(
                  `<div class='row bg-light p-3 pb-5 col-md-6 mx-auto border-bottom border-bottom-secondary jobcard rounded'>
                        <img class='mr-3 col-4 logo' src='`+ empList[jobArr[i].empID].logo +`' alt='Generic placeholder image'>
                              
                              <div class='col-6'>
                                    <p class='border border-secondary deadline text-center'>Hạn cuối: `+ jobArr[i].deadline +`</p>
                                    <input class="job__follow__check" id="job`+jobArr[i].id+`Check" `+ checked +` type="checkbox">
                                    <button type="button" class="btn btn__sn--sm px-0 py-0 job__follow__button job`+jobArr[i].id+`">
                                          <label for="job`+jobArr[i].id+`Check" class="p-0 m-0">
                                          <i class='fas fa-bookmark'></i> Lưu
                                          </label>
                                    </button>
                                    <a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flebonjourjob.netlify.com%2F&amp;src=sdkpreparse' class='fb-xfbml-parse-ignore btn btn__sn btn__sn--sm btn__sn--fb w-100 px-1'>
                                          <i class='fab fa-facebook'></i> Share 
                                    </a>
                              </div>
                              <div class='col-12 pr-0'>
                                    <h5 class='mt-0 truncate'>
                                    <a href='../employer/job_description.html'>`+ jobArr[i].title +`</a>
                                    </h5>
                                    <h6 class='truncate'>
                                    <a href='../employer/employer_profile.html'>`+ empList[jobArr[i].empID].name +`</a>
                                    </h6>
                                    <div class=''>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-money-bill-alt'></i> `+jobArr[i].salary+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-map-marker-alt'></i> `+jobArr[i].city+`
                                          </div>
                                          <div class='mr-3 d-inline-block'><i class='fas fa-users'></i> `+jobArr[i].vacancy+` <i class='fas fa-`+jobArr[i].gender+`'></i>
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

function jobCardSlim(jobObj,position){
            $("#"+position).empty();
            for (var i=0;i<3;i++){
                  $("#"+position).append(`
                  <div class="media-body jobcard bg-light rounded px-3 py-2 my-3">
                        <h5 class="mt-0 "><a href="../employer/job_description.html">`+jobObj.title+`</a></h5>
                        <div class="mb-1"><i class="fas fa-money-bill-alt"></i> `+jobObj.salary+`</div>
                        <div class="mb-1"><i class="fas fa-map-marker-alt"></i> `+jobObj.city+`</div>
                        <div class="mb-1"><i class="fas fa-users"></i> `+jobObj.vacancy+`

                              <i class="fas fa-`+jobObj.gender+`"></i>
                        </div>
                        <p class="border pl-2 border-secondary deadline">Hạn cuối: `+ jobObj.deadline +`</p>
                  </div>
                  `
                  )   
            } 
};


function vipCard(empArr,position,quantity1,quantity2){
      
            // $("#"+position).empty();
            if ($( window ).width() > 576){
                  var quantity=quantity1, hirings=4;
            } else {
                  var quantity=quantity2, hirings=2;
            }
            if(quantity = empArr.length){quantity = empArr.length}
            
            for (var i=0;i<quantity;i++){
                  $("#"+position).append(`
                  <div class='col-6 col-md-3 mt-4 mh-100'>
                  <div class='card employer__vip' id='event`+empArr[i].id+`'>
                        <img class="card-img-top w-75 h-25 align-self-center" src="`+ empArr[i].logo +`"
                              alt=' `+empArr[i].name+` logo'>
                        <div class='card-body py-2'>
                              <a href='../employer/employer_profile.html'>
                                    <h5 class='card-title text-center'>`+empArr[i].name+`</h5>
                              </a>
                              <p class='card-text text-center'><i class='fas fa-map-marker-alt'></i> `+empArr[i].city+`</p>
                              <h6 class="d-sm-none d-md-block">Công việc đang tuyển:</h6>
                              <ul class='d-sm-none d-md-block list-group list-group-flush'>`+
                              hiring(empArr[i].hiring,hirings) 
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
      // console.log(str)
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

function eventCard(eventArr,position,quantity1,quantity2){
      $("#"+position).empty();
      if ($( window ).width() > 576){
            $("#"+position).append(`
                  <div class="d-none d-md-inline col-md-4 py-3 placeholder">
                  </div>`)
            if(quantity1 = eventArr.length) {quantity1 = eventArr.length}
            
            for (var i=0;i<quantity1;i++){
                  console.log(eventArr[i].begin)
            if(eventArr[i]!=undefined){
                  var checked="";
            $.each(getFollowedEvents(),function(ind,val){
                  if(eventArr[i]===val){checked='checked'}
            })
            $("#"+position).append(`
            <div class="col-12 col-md-4 py-3">
                  <div class="card event__card">
                        <div class="row p-0 text-dark">
                              <div class="col-md-3 border-right border-right-primary event__card__date">
                                    <span class="event__card__day">
                                          T`+eventArr[i].begin.substring(3, 5)+`
                                    </span>
                                    <span class="event__card__month">
                                          `+eventArr[i].begin.substring(0, 2)+`
                                    </span>
                              </div>
                              <div class="col-md-9 d-md-inline event__preview" style="background-image:url('`+eventArr[i].preview+`')">
                                    
                              </div>

                        </div>
                        <div class="row">
                              <div class="col-md-8 pl-5 pb-4">
                                    <a href="../shared/constructing.html" title="`+eventArr[i].title+`">
                                          <h5 class="card-title text-left text-truncate">`+eventArr[i].title+`</h5>
                                    </a>
                                    <a href="../employer/employer_profile.html" title="`+eventArr[i].host+`">
                                          <p class="card-text text-left text-truncate">`+eventArr[i].host+`</p>
                                    </a>

                              </div>
                              <div class="col-md-3 px-0">
                                    <input class="event__follow__check" id="event`+eventArr[i].id+`Check" `+ checked +` type="checkbox">
                                    <button type="button" class="btn btn__sn--sm p-0 px-2 event__follow__button event`+eventArr[i].id+`">
                                          <label for="event`+eventArr[i].id+`Check" class="p-0 m-0">
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
      }
            
            } else {
                  $("#"+position).append(`
                  <div class="d-none d-md-inline col-md-4 py-3">
                  </div>`)
            if(quantity1 = eventArr.length) {quantity1 = eventArr.length}
            
            for (var i=0;i<quantity2;i++){
            if(eventArr[i]!=undefined){
                  var checked="";
            $.each(getFollowedEvents(),function(ind,val){
                  if(eventArr[i]===val){checked='checked'}
            })
            $("#"+position).append(`
            <div class="col-12 col-md-4 py-3">
                              <div class="card event__card">
                                    <div class="row p-0 text-dark">
                                          <div class="col-5 border-right border-right-primary event__card__date">
                                                <span class="event__card__day">
                                                      T`+eventArr[i].begin.substring(3, 5)+`
                                                </span>
                                                <span class="event__card__month">
                                                      `+eventArr[i].begin.substring(0, 2)+`
                                                </span>
                                          </div>
                                          <div class="col-7 px-0">
                                                <input class="event__follow__check" id="event`+eventArr[i].id+`" type="checkbox">
                                                <button type="button" class="btn btn__sn--sm p-0 px-2 mt-3 event__follow__button event`+eventArr[i].id+`">
                                                      <label for="event`+eventArr[i].id+`Check" class="p-0 m-0">
                                                            <i class="far fa-star"></i> Follow
                                                      </label>
                                                </button>
                                                <button type="button" class="btn btn__sn btn__sn--sm btn__sn--fb p-0 px-2">
                                                      <i class="fab fa-facebook-square"></i> Share <span
                                                            class="badge badge-light">4</span>
                                                </button>
                                          </div>
                                          <div class="col-12 pl-5 pb-4">
                                                <a href="../shared/constructing.html" title="`+eventArr[i].title+`">
                                                      <h5 class="card-title text-left text-truncate">`+eventArr[i].title+`</h5>
                                                </a>
                                                <a href="../employer/employer_profile.html" title="`+eventArr[i].host+`">
                                                      <p class="card-text text-left">`+eventArr[i].host+`</p>
                                                </a>
            
                                          </div>
                                          
                                    </div>
                              </div>
                        </div>

            `
            )   
            }
      }

            }
      
//       $(window ).resize(function() {
//             eventCard(eventArr[i],position,quantity1,quantity2)
//     }); 
}

function employerInfo(empObj,position){
      $("#"+position).append(`
      <p><strong>Thành lập: </strong>`+empObj.founded+`</p>
      <p><strong>Trụ sở: </strong>`+empObj.address+`, `+empObj.city+`</p>
      <p><strong>Ngành nghề kinh doanh: </strong>`+empObj.field+`</p>
      <p><strong>Quy mô nhân sự: </strong>`+empObj.size+`</p>
      <p><strong>Điện thoại: </strong>`+empObj.phone+`</p>
      <p><strong>Email: </strong>`+empObj.email+`</p></br>
      <p>`+empObj.detailDes+`</p>`
      )
}

function applicantInfo(aplObj,position){
      $("#"+position).append(`
      <p><strong>Ngày sinh: </strong>`+aplObj.dob+`</p>
      <p><strong>Địa chỉ: </strong>`+aplObj.address+`, `+aplObj.city+`</p>
      <p><strong>Công việc hiện tại: </strong>`+aplObj.currentJob+`</p>
      <p><strong>Điện thoại: </strong>`+aplObj.phone+`</p>
      <p><strong>Email: </strong>`+aplObj.email+`</p></br>
      <p>Mô tả bản thân: `+aplObj.aboutme+`</p>`
      )
}
function activitiesSlide(empObj,position){
      
      str=`<div class="container">
            <div class="rows">	
          <input type="radio" id="i1" name="images" checked />
          <input type="radio" id="i2" name="images" />
          <input type="radio" id="i3" name="images" />
          <input type="radio" id="i4" name="images" />
          <input type="radio" id="i5" name="images" />`;
      $.each(empObj.activity,function(index,value){
            str+=`
            <div class="slide_img" id="act`+(index+1)+`">			
                    <img src="`+value+`">
            </div>`
      })
      str+=`</div>
      <div id="nav_slide">`
      $.each(empObj.activity,function(index,value){
            str+=`
            <label for="i`+(index+1)+`" class="dots" id="dot`+(index+1)+`" style="background-image: url('`+value+`')"></label>`
      })	
      str+=`</div>
      </div>`
      $("#"+position).append(str)                    
}

function employerBanner(empObj,position){
      
      str=`<div id="carouselExampleIndicators" class="carousel slide banner" data-ride="carousel">
                  <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                        <div class="carousel-item banner__item banner__item--1 w-100 active" style="background-image: url('`+empObj.banner[0]+`')">                           
                        </div>
                        <div class="carousel-item banner__item banner__item--2 w-100" style="background-image: url('`+empObj.banner[1]+`')">                                   
                        </div>
                        <div class="carousel-item banner__item banner__item--3 w-100" style="background-image: url('`+empObj.banner[2]+`')">                              
                        </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                  </a>
            </div>`
      $("#"+position).append(str)                              
}

