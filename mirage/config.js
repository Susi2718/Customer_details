export default function () {
  this.namespace = '/api/1';
  this.get('/contacts');
  this.get('/contacts/:id');
  this.get('/genders');
  this.patch('/contacts/:id');
  this.post('/contacts');
  this.delete('/contacts/:id');
}
