jQuery(function ($) {

    jQuery.validator.addMethod("country", function (value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    jQuery.validator.addMethod("number", function (value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    }, "Please enter the number without beginning with '0'");

    jQuery.validator.addMethod("mobile", function (value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");

    jQuery.validator.addMethod("alphabets", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");

    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");


    jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");


    if ($('#contact-form').length > 0) {
        $('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#main-popup').length > 0) {
        $('#main-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#registerform').length > 0) {
        $('#registerform').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#register-form').length > 0) {
        $('#register-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }


    if ($('#price-popup').length > 0) {
        $('#price-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#enquire-now').length > 0) {
        $('#enquire-now').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#brochure-form').length > 0) {
        $('#brochure-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#floor-form').length > 0) {
        $('#floor-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

    if ($('#master-form').length > 0) {
        $('#master-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname: {
                        required: "Enter Your Name"
                    },
                    mobile: {
                        required: "Enter Your Number"
                    },
                    email: {
                        required: "Enter Your Email"
                    }
                }
        });
    }

});