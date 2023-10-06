const corsWhitelist = {
  clientX: {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST',]
  },
  clientY: {
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
}

module.exports = corsWhitelist;