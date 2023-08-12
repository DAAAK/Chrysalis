import { Request, Response } from 'express';
import { userModel } from '../../../models/';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as facebookStrategy } from 'passport-facebook';

const secret = 'yoursecretkey';

// TODO: Create the whole facebook authentication process
export default class facebookController {}
