/* eslint-disable */
export default function guardrail(mathFunction) {
    const queue = [];
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(`Error: ${error.message}`); // queue.push(error.toString());
    } finally {
      queue.push('Guardrail was processed');
    }
    return queue;
}
