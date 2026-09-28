import z from 'zod'
import "dotenv/config"

const envSchema = z.object({
    DISCORD_TOKEN: z.string().min(64),
    CLIENT_ID: z.string().min(16),
    
    MAIN_SERVER: z.string().min(16),
    STJD_SERVER: z.string().min(16),
    INFORMATION_SERVER: z.string().min(16),
});

const parsedEnv = envSchema.parse(process.env);

export default parsedEnv