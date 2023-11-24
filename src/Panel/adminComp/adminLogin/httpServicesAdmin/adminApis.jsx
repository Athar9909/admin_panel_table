import adminHttpService from "../httpServicesAdmin/adminHttpService";
import Swal from "sweetalert2";

export async function adminLogin(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/login`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function adminForgotPass(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/forgotPassword`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function adminVerifyOtp(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/verifyOTP`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function adminResetPass(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/updatePassword`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

// dash api

export async function AddNewRestaurant(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addRestaurant`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function UpdateAdminRestaurant(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/updateRestaurant`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AllRestaurants(formdata) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getBranches`,
      formdata
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function getRestaurantDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getBranchDetail/` + id
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AllTakeawayOrders(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getOrders`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function OrdersDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getOrderDetail/` + id
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AllCousines(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getCuisines`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AddNewCuisine(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/addCuisine`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AllManTables(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getQRCodes`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AllDinings(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getQRCodes`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AllAddOns(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getAddOns`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function GetOrders(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getOrders`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function GetProfileDetail() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getMyProfile`
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function ViewNewOrders(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/getOrderDetail/` + id
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AddNewAddOn(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/addAddOn`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function AddNewQR(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/addQRCode`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function UpdateRestaurant(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/restaurant/updateProfile`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AllTransactions(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getTransactions`,
      formData
    );
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function AllNotifications(formData) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getNotifications`
    );
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function DashboardData(formData) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getDashboardCount`
    );
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}

export async function exportBranchData(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/exportBranches`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function exportOrderData(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/exportOrders`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function exportTransactionData(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/exportTransactions`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
export async function ChnageLanguage(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/changeLanguage`,
      formData
    );
    console.log(data);
    if (data?.error) {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { data };
  } catch (error) {
    if (error?.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
    }
    return { error };
  }
}
