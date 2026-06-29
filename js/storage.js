/* ============================================
   CodePilot – Storage Manager (localStorage)
   ============================================ */

const Storage = {
    KEY: 'codepilot_save',

    // Default save data
    getDefault() {
        return {
            completedLevels: [],
            currentLevel: 1,
            xp: 0,
            totalXp: 0,
            level: 1,
            streak: 0,
            lastPlayDate: null,
            achievements: [],
            name: 'Code Pilot'
        };
    },

    // Load save data
    load() {
        try {
            const data = localStorage.getItem(this.KEY);
            if (data) {
                const parsed = JSON.parse(data);
                // Merge with defaults to handle new fields
                return { ...this.getDefault(), ...parsed };
            }
        } catch (e) {
            console.error('Error loading save:', e);
        }
        return this.getDefault();
    },

    // Save data
    save(data) {
        try {
            localStorage.setItem(this.KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving:', e);
        }
    },

    // Complete a level
    completeLevel(levelNum, xpReward) {
        const data = this.load();
        if (!data.completedLevels.includes(levelNum)) {
            data.completedLevels.push(levelNum);
            data.xp += xpReward;
            data.totalXp += xpReward;

            // Level up calculation (100 XP per level)
            const xpPerLevel = 100;
            while (data.xp >= xpPerLevel) {
                data.xp -= xpPerLevel;
                data.level++;
            }

            // Update current level to next uncompleted
            if (levelNum >= data.currentLevel) {
                data.currentLevel = levelNum + 1;
            }

            // Update streak
            const today = new Date().toDateString();
            if (data.lastPlayDate !== today) {
                const yesterday = new Date(Date.now() - 86400000).toDateString();
                if (data.lastPlayDate === yesterday) {
                    data.streak++;
                } else if (data.lastPlayDate !== today) {
                    data.streak = 1;
                }
                data.lastPlayDate = today;
            }

            this.save(data);
        }
        return data;
    },

    // Unlock achievement
    unlockAchievement(achievementId) {
        const data = this.load();
        if (!data.achievements.includes(achievementId)) {
            data.achievements.push(achievementId);
            this.save(data);
            return true; // newly unlocked
        }
        return false; // already had it
    },

    // Check if level is completed
    isCompleted(levelNum) {
        const data = this.load();
        return data.completedLevels.includes(levelNum);
    },

    // Check if level is unlocked
    isUnlocked(levelNum) {
        const data = this.load();
        return levelNum <= data.currentLevel;
    },

    // Reset all progress
    reset() {
        localStorage.removeItem(this.KEY);
    },

    // Get rank title based on level
    getRank(level) {
        if (level >= 25) return '🏆 Code Master';
        if (level >= 20) return '💎 Experte';
        if (level >= 15) return '🔥 Fortgeschritten';
        if (level >= 10) return '⭐ Erfahren';
        if (level >= 5) return '📈 Lehrling';
        return '🌱 Anfänger';
    }
};

// Achievements definitions
const ACHIEVEMENTS = [
    { id: 'first_level', icon: '🎯', name: 'Erster Schritt', desc: 'Erstes Level abgeschlossen', condition: (data) => data.completedLevels.length >= 1 },
    { id: 'five_levels', icon: '⭐', name: 'Auf dem Weg', desc: '5 Level abgeschlossen', condition: (data) => data.completedLevels.length >= 5 },
    { id: 'ten_levels', icon: '🔟', name: 'Zweistellig', desc: '10 Level abgeschlossen', condition: (data) => data.completedLevels.length >= 10 },
    { id: 'chapter1', icon: '📖', name: 'Kapitel 1 fertig', desc: 'Alle Level in Kapitel 1 geschafft', condition: (data) => [1,2,3,4,5,6,7,8,9,10].every(l => data.completedLevels.includes(l)) },
    { id: 'chapter2', icon: '📗', name: 'Kapitel 2 fertig', desc: 'Alle Level in Kapitel 2 geschafft', condition: (data) => [11,12,13,14,15,16,17,18,19,20].every(l => data.completedLevels.includes(l)) },
    { id: 'chapter3', icon: '📘', name: 'Kapitel 3 fertig', desc: 'Alle Level in Kapitel 3 geschafft', condition: (data) => [21,22,23,24,25,26,27,28,29,30].every(l => data.completedLevels.includes(l)) },
    { id: 'half_way', icon: '🏅', name: 'Halbzeit!', desc: '25 Level abgeschlossen', condition: (data) => data.completedLevels.length >= 25 },
    { id: 'xp_500', icon: '💰', name: 'XP Sammler', desc: '500 XP gesammelt', condition: (data) => data.totalXp >= 500 },
    { id: 'xp_1000', icon: '💎', name: 'XP König', desc: '1000 XP gesammelt', condition: (data) => data.totalXp >= 1000 },
    { id: 'streak3', icon: '🔥', name: 'Brennender Eifer', desc: '3 Tage Streak', condition: (data) => data.streak >= 3 },
    { id: 'streak7', icon: '🔥', name: 'Wochenkrieger', desc: '7 Tage Streak', condition: (data) => data.streak >= 7 },
    { id: 'all_done', icon: '👑', name: 'HTML Meister', desc: 'Alle 50 Level abgeschlossen!', condition: (data) => data.completedLevels.length >= 50 },
];
