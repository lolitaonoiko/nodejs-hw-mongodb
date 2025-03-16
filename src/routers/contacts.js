import express from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/', jsonParser, ctrlWrapper(createContactController));

router.delete('/:contactId', ctrlWrapper(deleteContactController));

router.patch('/:contactId', jsonParser, ctrlWrapper(updateContactController));

export default router;
