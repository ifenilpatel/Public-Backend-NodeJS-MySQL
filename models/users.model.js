const { currentDate } = require("../configuration/utils/Common.conf.js");

const masterData = (request) => {
    let userId = request.body.userId || 0;
    let firstName = request.body.firstName || "";
    let lastName = request.body.lastName || "";
    let mobile = request.body.mobile || "";
    let emailId = request.body.emailId || "";
    let passwordHash = request.body.passwordHash || "";
    let isActive = request.body.isActive == true ? true : false;
    let createdBy = request.body.createdBy || 0;
    let createdOn = request.body.createdOn || currentDate();

    return {
        userId,
        firstName,
        lastName,
        mobile,
        emailId,
        passwordHash,
        isActive,
        createdBy,
        createdOn,
    };
};

const select = function (strwhere) {
    var strQuery = ` select * from tblusers where 1 = 1 ` + strwhere;
    return strQuery;
};

const selectcolumn = function (strcolumn, strwhere) {
    var strQuery = ` select ${strcolumn} from tblusers where 1 = 1 ` + strwhere;
    return strQuery;
};

const getcount = function (strwhere) {
    var strQuery = ` select count(*) as cnt from tblusers where 1=1 ` + strwhere;
    return strQuery;
};

const deleteString = function (strwhere) {
    var strQuery = ` delete from tblusers where 1 = 1 ` + strwhere;
    return strQuery;
};

const insert = function (pera) {
    var strQuery = ` insert into tblusers (userId, firstName, lastName, mobile, emailId, passwordHash, isActive, createdBy, createdOn) values (?, ?, ?, ?, ?, ?, ?, ?, ?) `;
    return {
        query: strQuery,
        data: [
            pera.userId,
            pera.firstName,
            pera.lastName,
            pera.mobile,
            pera.emailId,
            pera.passwordHash,
            pera.isActive,
            pera.createdBy,
            pera.createdOn,
        ],
    };
};

const insertString = function () {
    var strQuery = ` insert into tblusers (userId, firstName, lastName, mobile, emailId, passwordHash, isActive, createdBy, createdOn) values `;
    return strQuery;
};

const update = function (pera) {
    var strQuery = ` update tblusers set firstName = ?, lastName = ?, mobile = ?, emailId = ?, passwordHash = ?, isActive = ?, createdBy = ?, createdOn = ? where userId = ? `;
    return {
        query: strQuery,
        data: [
            pera.firstName,
            pera.lastName,
            pera.mobile,
            pera.emailId,
            pera.passwordHash,
            pera.isActive,
            pera.createdBy,
            pera.createdOn,
            pera.userId,
        ],
    };
};

const updateColumn = function (column, strwhere) {
    var strQuery = ` update tblusers set ${column} where 1=1 ` + strwhere;
    return strQuery;
};

module.exports = {
    masterData,
    select,
    selectcolumn,
    getcount,
    deleteString,
    insert,
    insertString,
    update,
    updateColumn,
};
