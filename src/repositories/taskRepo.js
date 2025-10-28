import prisma from '../config/db.js';

// Find all tasks
export async function findAll() {
  return prisma.task.findMany();
}

// Find a singular task
export async function findOne(id){
  return prisma.task.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      completed: true,
    
    }
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
