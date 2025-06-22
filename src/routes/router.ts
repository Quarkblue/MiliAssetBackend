import { Router } from "express";
import { healthCheck } from "../controllers/hc";
import authRoutes from "./auth.routes";
import dashboardRoutes from "./dashboard.routes";
import purchaseRoutes from "./purchase.routes";
import transferRoutes from "./transfer.routes";
import assignmentRoutes from "./assignment.routes";
import expenditureRoutes from "./expenditure.routes";
import filterDataRoutes from "./filterData.routes";

const router = Router();

router.get("/hc", healthCheck);

router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/purchases", purchaseRoutes);
router.use("/transfers", transferRoutes);
router.use("/assignments", assignmentRoutes);
router.use("/expenditures", expenditureRoutes);
router.use("/filter-data", filterDataRoutes);

export default router;
