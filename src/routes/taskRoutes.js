import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateTaskQuery } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);
router.post('/', validateTask, taskController.createTask);
router.get('/:id', validateTaskQuery, taskController.getTask);

export default router;
