"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const filterData_controller_1 = require("../controllers/filterData.controller");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.authenticateToken, filterData_controller_1.getFilterData);
exports.default = router;
