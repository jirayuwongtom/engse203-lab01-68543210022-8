const student = {
  name: "จิรายุ วงศ์ต่อม",
  studentId: "68543210022-8",
  os: process.platform,
  node: process.version,
};

function createGreeting({ name, studentId, os, node }) {
  return `Hello ${name} (${studentId}) | OS: ${os} | Node: ${node}`;
}

console.log(createGreeting(student));