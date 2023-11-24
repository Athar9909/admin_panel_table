import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetecter from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetecter)
  .init({
    resources: {
      en: {
        translation: {
          Dashboard: "Dashboard",
          Order: "Order",
          Menu: "Menu",
          QR_Code: "QR Code",
          Transaction: "Transaction",
          Notification: "Notification",
          My_Profile: "My Profile",
          Logout: "Logout",
          Restaurant: "Restaurant",
          Takeaway: "Takeaway",
          Dining: "Dining",
          CateM: "Category Management",
          CuisM: "Cuisine Management",
          AddOn: "Add On Management",
          ManualT: "Manual Table",
          WaitingT: "Waiting Table",
          AllTransaction: "All Transaction",
          EditProfile: "Edit Profile",
          EditBanner: "Edit Banner",
          TotalQR: "Total QR",
          GrandTotal: "Grand Total",
          TotalOrders: "Total Orders",
          SOD: "Search By Order",
          SCateN: "Search By Category Name",
          SCuisN: "Search By Cuisine Name",
          SOrderId: "Search By Order ID",
          TableId: "Table ID",
          OrderId: "Order ID",
          TransId: "Transaction ID",
          PickTime: "Pick Up Time",
          Status: "Status",
          Action: "Action",
          S_no: "S.No",
          AddCate: "Add Category",
          Cate: "Category",
          AddCuis: "Add Cuisine",
          Exp: "Export",
          Bulk: "Bulk Upload",
          Image: "Image",
          IName: "Item Name",
          Price: "Price",
          Addon: "Addon",
          Edit: "Edit",
          SAddOn: "Search By AddOn Name",
          AddAddon: "Add New AddOn",
          OptionsN: "Option Name",
          Date: "CreatedAt",
          SManual: "Search By Table Name",
          AddTable: "Add Table/Qr",
          TableN: "Table Name",
          SCustN: "Search By Customer Name",
          GenWQr: "Generate waiting QR",
          GenQr: "Generate QR",
          CustN: "Customer Name",
          Time: "Time",
          No_: "Mobile Number",
          STrans: "Search By Transaction ID",
          from: "From",
          To: "To",
          Search: "Search",
          OrderType: "Order Type",
          Total: "Total",
          Title: "Title",
          Desc: "Description",
          View: "View",
          Details: "Details",
          Info: "Information",
          Order: "Order",
          Booking: "Booking",
          Menu: "Booking",
          Qty: "Quantity",
          Change: "Change",
          Amount: "Amount",
          comment: "Any excepted request",
          Items: "Items",
          Name: "Name",
          Edit: "Name",
          Cate: "Category",
          Cuis: "Cuisine",
          Back: "Back",
          Save: "Save",
          desc1:
            "Product Selling Categories can be defined here like... Beverages, Bakery, Breads, Dairy Items",
          Select: "Select",
          Upload: "Upload Image",
          AddMore: "Add More",
          Branch: "Branch",
          Table: "Table",
          Req: "Request",
          Cust: "Customer",
          AWT: "Add Waiting Time",
          desc2: "Please Set Time According to Open and Close Hours",
          Alott: "Alott",
          Choose: "Choose",
          AddWaitingQR: "Add Waiting QR",
          RestDetails: "Restaurant Details",
          RestN: "Restaurant Name",
          RestAddress: "Restaurant Address",
          RestDesc: "Restaurant Description",
          RestOwn: "Owner Name",
          UpLogo: "Upload Logo",
          NoFile: "No File Choosen",
          Manage: "Management",
          RestaurantM: "Restaurant Management",
          TakeawayM: "Takeaway Orders Management",
          DiningM: "Dining Orders Management",
          TransM: "Transaction Management",
          NotiM: "Notification Management",
          Latest: "Latest Order",
          View: "View",
          SRN: "Search by Restaurant Name",
          ANR: "Add New Restaurant",
          UpCover: "Upload Cover",
          CountryCode: "Country Code",
          Email: "Email",
          CloseT: "Close Timing",
          OpenT: "Open Timing",
          Password: "Password",
          SaveD: "Save Details",
          RestD: "Restaurant Details",
          LogoImg:"Logo Image",
          CoverImg:"Cover Image",
        },
      },
      ar: {
        translation: {
          Dashboard: "الرئيسية",
          Order: "الطلبات",
          Menu: "الطعام",
          QR_Code: "رمز الاستجابة السريع",
          Transaction: "العمليات المالية",
          Notification: "الاشعارات",
          My_Profile: "ملفي الشخصي",
          Logout: "تسجيل الخروج",
          Restaurant: "المطعم",
          Takeaway: "الطلبات الخارجية",
          Dining: "الطلبات الداخلية",
          CateM: "إدارة الفئة",
          CuisM: "تصنيف الوجبات",
          AddOn: "إدارة الإضافات",
          ManualT: "الطاولات",
          WaitingT: "طاولات الأنظار",
          AllTransaction: "كل العمليات المالية",
          EditProfile: "تغير الملف",
          EditBanner: "تغير اللافته الخارجية",
          TotalQR: " إجمالي رمز الاستجابة",
          GrandTotal: "المجموع الإجمالي",
          TotalOrders: "مجمل الطلبات",
          SOD: "ابحث برقم الطلب",
          SCateN: "ابحث بأسم الفئة",
          SCuisN: "ابحث بأسم الوجبة",
          TableId: "رقم الطاولة",
          OrderId: "رقم الطلب",
          TransId: "رقم العملية",
          PickTime: "وقت الاستلام",
          Status: "حالة الطلب",
          Action: "العمليات",
          S_no: "رقم سري",
          AddCate: " اضافة صنف",
          Cate: "الفئة",
          AddCuis: "اضافة وجبة",
          Exp: "يصدّر",
          Image: "الصورة",
          IName: "اسم الصنف",
          Price: "لسعر",
          Addon: "اضافات جانبية",
          Bulk: "تحميل مجمع",
          Edit: "تعديل",
          SAddOn: "ابحث باسم الإضافة",
          AddAddon: "إضافة جديدة",
          OptionsN: " الإضافة",
          Date: "تاريخ الطلب",
          SManual: "ابحث باسم الطاولة",
          AddTable: "إضافة طاولة",
          TableN: "اسم الطاولة",
          SCustN: "ابحث بأ`سم العميل",
          GenWQr: "اصنع رمز استجابة",
          GenQr: "كود جديد",
          CustN: "اسم العميل",
          Time: "وقت",
          No_: "رقم الجوال",
          STrans: "ابحث برقم العملية",
          from: "من",
          To: "لى",
          Search: "البحث",
          OrderType: "نوع الطلب",
          Total: "المبلغ الكلي",
          SOrderId: "ابحث برقم الطلب",
          Title: "العنوان",
          Desc: "الوصف",
          View: "عرض",
          Details: "تفاصيل",
          Info: "معلومات",
          Order: "الطلب",
          Booking: "الحجز",
          Menu: "قائمة الطعام",
          Qty: "الكمية",
          Change: "تغير ",
          Amount: "المبلغ",
          comment: "ملاحظات خاصة",
          Items: "عناصر",
          Name: "الاسم",
          Cate: "الفئة",
          Cuis: " وجبة",
          Back: "عودة",
          Save: "حفظ",
          desc1:
            " يمكن تحديد فئات بيع المنتجات هنا   ... المشروبات، خبز المخبوزات، مثل منتجات الألبان",
          Select: "اختر",
          Upload: "تحميل الصورة",
          AddMore: "اضف اكثر",
          Branch: " الفرع",
          Table: "الطاولة",
          Req: "طلب",
          CustInfo: "معلومات العميل",
          AWT: "إضافة وقت الانتظار",
          desc2: "يرجى ضبط الوقت حسب ساعات الفتح والإغلاقs",
          Alott: "تخصيص",
          Choose: "يختار",
          AddWaitingQR: "اصنع رمز استجابة",
          RestDetails: "اسم المطعم",
          RestN: "اسم المطعم",
          RestAddress: "عنوان المطعم",
          RestDesc: "وصف المطعم",
          RestOwn: "اسم المالك",
          UpLogo: "تحميل الشعار",
          NoFile: "لم تقم باختيار ملف",
          Manage: "إدارة",
          RestaurantM: "إدارة المطاعم",
          TakeawayM: "ادارة الطلبات الخارجية  ",
          DiningM: "ادارة الطلبات الداخلية",
          TransM: "ادارة العمليات المالية",
          NotiM: "ادارة الاشعارات",
          Latest: "أحدث الطلبات",
          View: "عرض",
          SRN: "ابحث باسم المطعم",
          ANR: "إضافة مطعم جديد",
          UpCover: "تحميل الغلاف",
          CountryCode: "رمز الدولة",
          Email: "البريد إلكتروني",
          CloseT: "وقت الإغلاق",
          OpenT: "وقت العمل",
          Password: "كلمة السر",
          SaveD: "Save Details",
          RMD: "تفاصيل المطعم",
          LogoImg:"صورة الشعار",
          CoverImg:"صورة الغلاف",
        },
      },
    },
    detection: {
      order: ["cookie", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    // lng: document.querySelector("html").lang,
    fallbackLng: "en",
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "assets/lang/{{lng}}.json",
    },
  });