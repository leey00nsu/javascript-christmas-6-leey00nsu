const PREFIX = '[ERROR]';

class InputError extends Error {
  constructor(errorMessage) {
    super(`${PREFIX} ${errorMessage}`);
  }
}

export default InputError;
