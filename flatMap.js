module.exports = {
  "run": [{
    "method": "log",
    "params": {
      "raw": "{{_.flatMap([1, 2, 3], self.duplicate)}}"
    }
  }],
  "duplicate": (n) => {
    return [n, n]
  }
}
