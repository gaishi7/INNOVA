// 中文版本
$(document).ready(function() {
    $('#contactForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '*请填写您的姓名'
                    },
                    // stringLength: {
                    //     min: 2,
                    //     max: 5,
                    //     message: '不得少于2个汉字多于5个汉字'
                    // },
                    regexp: {
                        regexp: /^[\u4E00-\u9FA5]{2,5}$|^[A-z\/ ]{2,20}$/,
                        message: '*请输入2-5位不含特殊字符的汉字或2-20位包含空格的英文'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '*请填写您的邮箱'
                    },
                    emailAddress: {
                        message: '*请填写正确的邮箱地址'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: '*请填写邮件内容'
                    },
                    stringLength: {
                        min: 2,
                        max: 200,
                        message: '*请输入长度不小于2不多余200的内容'
                    }
                }
            }
        }
    });
});

//英文版
// $(document).ready(function () {
//   $("#contactForm").bootstrapValidator({
//     message: "This value is not valid",
//     feedbackIcons: {
//       valid: "glyphicon glyphicon-ok",
//       invalid: "glyphicon glyphicon-remove",
//       validating: "glyphicon glyphicon-refresh",
//     },
//     fields: {
//       name: {
//         message: "*The username is not valid",
//         validators: {
//           notEmpty: {
//             message: "*The username is required and can't be empty",
//           },
//           stringLength: {
//             min: 2,
//             max: 20,
//             message:
//               "*The username must be more than 2 and less than 20 characters long",
//           },
//           regexp: {
//             regexp:/^[\u4E00-\u9FA5]{2,5}$|^[A-z\/ ]{2,20}$/,
//             message: "Please input 2-5 Chinese characters without special characters or 2-20 English characters with spaces",
//           },
//         },
//       },
//       email: {
//         validators: {
//           notEmpty: {
//             message: "*The email address is required and can't be empty",
//           },
//           emailAddress: {
//             message: "*The input is not a valid email address",
//           },
//         },
//       },
//       message: {
//         validators: {
//           notEmpty: {
//             message: "*The content is required and can't be empty",
//           },
//           stringLength: {
//             min: 2,
//             max: 600,
//             message:
//               "*The content must be more than 2 and less than 600 characters long",
//           },
//         },
//       },
//     },
//   });
// });
