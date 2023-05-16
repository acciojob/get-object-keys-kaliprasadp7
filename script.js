// Create the student object
const student = {
  name: 'John Doe'
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Access the keys of the student object
const keys = student.getKeys();

// Output the keys
console.log(keys);
