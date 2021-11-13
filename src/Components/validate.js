export const validate = (data,type) => {
  const errors = {};
if(type === "signup"){

  if (!data.name.trim()) {
    errors.name = "Name required";
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S/.test(data.email)) {
    errors.email = "Invalid email";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password required";
  } else if (data.password.length < 6) {
    errors.password = "password must be more than 6 chracters";
  } else {
    delete errors.password;
  }

  if (!data.confirmpassword) {
    errors.confirmpassword = "ConfirmPassword required";
  } else if (data.confirmpassword !== data.password) {
    errors.confirmpassword = "Passwords not match";
  } else {
    delete errors.confirmpassword;
  }

  if (data.checkbox) {
    delete errors.checkbox;
  } else {
    errors.checkbox = "Must be accepted";
  }
}

if(type ==="login"){

}
if (!data.email) {
  errors.email = "Email required";
} else if (!/\S+@\S+\.\S/.test(data.email)) {
  errors.email = "Invalid email";
} else {
  delete errors.email;
}

if (!data.password) {
  errors.password = "Password required";
} else if (data.password.length < 6) {
  errors.password = "password must be more than 6 chracters";
} else {
  delete errors.password;
}


if (data.checkbox) {
  delete errors.checkbox;
} else {
  errors.checkbox = "Must be accepted";
}


  return errors;
};
