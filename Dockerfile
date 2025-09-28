# Image de base
FROM node:18

# Dossier de travail
WORKDIR /usr/src/app

# Copier les fichiers
COPY package*.json ./
RUN npm install

COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
