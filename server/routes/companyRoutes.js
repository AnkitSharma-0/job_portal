import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibilty, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'

const router = express.Router()

//Register a Company
router.post('/register',upload.single('image'),registerCompany)

//Company login
router.post('/login',loginCompany)

//get company data
router.get('/company',protectCompany,getCompanyData)

// post a job
router.post('/post-job',protectCompany,postJob)

// get applicants data of company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

// get application job list
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//change applications status
router.post('/change-status',protectCompany,ChangeJobApplicationsStatus)

//change applications visiblity
router.post('/change-visiblity',protectCompany,changeVisibilty)

export default router