FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer le serveur Next.js en mode développement
CMD ["npm", "run", "dev"]
