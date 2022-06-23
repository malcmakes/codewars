// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70

function expandedForm(num) {
    test = String(num);

    let result = [];

    for (var i = 0; i < test.length; i++) {
      if (test[i] == 0) continue;
      else result.push(test[i] + "0".repeat(test.length -i -1))

    }

    return result.join(" + ")
  }