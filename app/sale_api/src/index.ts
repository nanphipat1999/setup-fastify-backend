import fastify from 'fastify';

const app = fastify({
    logger: true,
});

app.get('/api/health', (_req, res) => {
    res.status(200).send({ message: 'ok' });
});

export { app };
