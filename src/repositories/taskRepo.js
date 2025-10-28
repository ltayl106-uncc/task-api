import prisma from '../config/db.js';

// Find all tasks
export async function findAll() {
  return prisma.task.findMany();
}

// Find a singular task
export async function findOne(id){
  const task = await prisma.task.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      completed: true,
    }
  });
  return task;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
