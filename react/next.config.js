/** @type {import('next').NextConfig} */
const nextConfigE = {
    async redirects() {
        return [
            {
                source: '/login',
                destination: '/empresa',
                permanent: true,
            },
        ]
    }
};

const nextConfigCadE = {
    async redirects() {
        return [
            {
                source: '/cadastro_empresa',
                destination: '/login',
                permanent: true,
            },
        ]
    }
};

const nextConfigU = {
    async redirects() {
        return [
            {
                source: '/login',
                destination: '/empresa',
                permanent: true,
            },
        ]
    }
};

const nextConfigCadU = {
    async redirects() {
        return [
            {
                source: '/cadastro_usuario',
                destination: '/login',
                permanent: true,
            },
        ]
    }
};

module.exports = {
    nextConfigE,
    nextConfigCadE,
    nextConfigU,
    nextConfigCadU
}
