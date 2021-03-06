const { check, validationResult } = require('express-validator');

exports.validateRegister = [
  check('username', 'Please enter a username').not().isEmpty(),
  check('email', 'Please enter a valid email address').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateLogin = [
  check('email', 'Please enter a valid email address').isEmail(),
  check('password', 'Password is required').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    const { email, password } = req.body;

    console.log(email, password);
    console.log('email, password');

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validatePostReview = [
  check(
    'starRating',
    'Rating should be an Integer between required and must be between 1-5'
  )
    .notEmpty()
    .isInt({ min: 1, max: 5 }),
  check('reviewedProfileId', 'reviewedProfileId is required').notEmpty(),
  check('text', 'text is required').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateGetAllReviews = [
  check('profileId', 'profileId is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
