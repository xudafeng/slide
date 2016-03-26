process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
});

try {
  setTimeout(function() {
    throw new Error("error");
  }, 16);
} catch(err) {
  console.log(err);
}
