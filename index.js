let result = document.getElementById('result');

        function Result(value) {
            const currentValue = result.value;

            if (value === '.' && currentValue.includes('.')) {
                // Prevent multiple decimal points
                return;
            }

            if (value === '+' || value === '-' || value === '*' || value === '/') {
                const lastChar = currentValue[currentValue.length - 1];
                if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                    // Prevent double operators
                    return;
                }
            }

            result.value += value;
        }

        function calculateResult() {
            
                result.value = eval(result.value);
            
        }

        function clearResult() {
            result.value = '';
        }
        function backValue(){
            result.value=result.value.slice(0,-1)
        }
    