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

export async function AllRestaurants() {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getBranches`
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
export async function AllTakeaways(formData) {
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