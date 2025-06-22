"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterData = getFilterData;
const filterData_service_1 = require("../services/filterData.service");
async function getFilterData(req, res) {
    try {
        const { filters } = req.query;
        if (!filters || typeof filters !== 'string')
            return res.status(400).json({ message: "filters should be a comma separated string" });
        const user = req.user;
        if (!user)
            return res.status(401).json({ message: "Unauthorized" });
        const filtersArray = filters.split(",");
        const data = await (0, filterData_service_1.fetchFilterData)(filtersArray, user);
        return res.json({
            data,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
