import { FastifyRequest, FastifyReply } from 'fastify'
import { hash } from 'bcryptjs'
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySquema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)

    })

    const { name, email, password } = registerBodySquema.parse(request.body)

    

    return reply.status(201).send()
}