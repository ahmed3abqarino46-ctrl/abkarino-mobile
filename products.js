// ملف المنتجات — عدّل هنا بس. حط الصور في فولدر img.
// الحقول الاختيارية (storage, ram, battery) لو مش معروفة متكتبهاش وهتختفي من الموقع.
// condition: "new" أو "used" — conditionLabel: نص اختياري يظهر بدل "مستعمل".
window.STORE = {
  name: "عبقرينو لخدمات المحمول",
  whatsapp: "201001322734",
  phone: "01001322734",
  address: "رقم ٥ دكان الوان، بجوار دولفين مول وأحمد السلاب، المحور المركزي، الحي الأول، ٦ أكتوبر، الجيزة",
  maps: "https://maps.app.goo.gl/Cg18yah1FTW18Lmq5",
  hours: "يوميًا من 10 الصبح لحد 12 بالليل، بدون إجازات",
  areas: "أكتوبر، الجيزة، الهرم، القاهرة"
};
// إكسسوارات: ضيف category:"accessories" و subcategory:"internal" (داخلية) أو "external" (خارجي)
// مثال: {id:"acc1",category:"accessories",subcategory:"external",brand:"-",name:"...",price:0,condition:"new",description:"...",images:["img/..."]}
window.PRODUCTS = [
 {id:"s6edge",brand:"Samsung",name:"Samsung Galaxy S6 Edge",color:"ذهبي",price:1500,condition:"used",conditionLabel:"مستعمل / قطع غيار",
  description:"نص أمامي بس (شاشة إيدج زيرو + بودي وفريم)، للقطع أو التجميع.",images:["img/s6edge_half.jpg"]},
 {id:"c35",brand:"Realme",name:"Realme C35",color:"أخضر",price:1200,condition:"used",conditionLabel:"مستعمل / قطع غيار",
  description:"من غير بورد ولا بطارية، شاشة أصلية وهاوسنج وفلاتات وكاميرات زيرو.",images:["img/c35_back.jpg","img/c35_box.jpg"]},
 {id:"note5",brand:"Samsung",name:"Samsung Galaxy Note 5",price:2500,condition:"used",
  description:"شغال بالكامل، العيب الوحيد ضهر إزاز مشروخ.",images:["img/note5_front.jpg","img/note5_back.jpg"]},
 {id:"xa-ultra",brand:"Sony",name:"Sony Xperia XA Ultra",color:"ذهبي",price:750,condition:"used",conditionLabel:"مستعمل / قطع غيار",
  description:"كله شغال ما عدا الشاشة مكسورة.",images:["img/sony_front.jpg","img/sony_back.jpg"]},
 {id:"a1k",brand:"Oppo",name:"Oppo A1k",color:"أحمر",price:1000,condition:"used",conditionLabel:"مستعمل / قطع غيار",
  description:"بورد زيرو وكله شغال، محتاج شاشة بالفريم وظهر.",images:["img/oppo_a1k.jpg"]}
];
