const _config = {
  beta: {
    
  },
  prod: {
  
  },
};

const _env = 'prod'; // d2t/beta/prod

const Config = _config[_env];

export default Config;
