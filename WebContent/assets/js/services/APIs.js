//APIs definations

angular.module('istarcms').constant('APP_API', {
    nativeLogin: "istarUI/login",
    nativeLogout: "istarUI/logout",
    userProfileInformation: "istarUI/profile",
    nativeregister: "ISTARAPIS/rest/verifylogin/sign_up",
    forgotPassword: "istarUI/auth/forgot",
    resetPassword: "istarUI/auth/resetPassword",
    createUser: "istarUI/createUser",
    createCompanyOrganization: "istarUI/organization/createOrg",
    createGovernmentOrganization: "istarUI/organization/createOrg",
    createCollegeOrganization: "istarUI/organization/createOrg",
    createOrg: "istarUI/organization/createOrg",
    getUserList: "istarUI/userlistcontroller",
    getOrganizationList: "istarUI/orglist",
    updateOrg:"istarUI/OrgUpdateController"	
});
