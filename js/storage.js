/* ============================================
   CodePilot – Storage Manager v2 (English)
   ============================================ */

const Storage = {
    KEY: 'codepilot_save',

    getDefault() {
        return {
            completedLessons: [],  // e.g. ['html-1', 'html-2']
            currentLesson: {},     // e.g. { html: 1 }
            xp: 0,
            totalXp: 0,
            level: 1,
            streak: 0,
            lastPlayDate: null,
            achievements: [],
            musicOn: false          // Music OFF by default
        };
    },

    load() {
        try {
            const data = localStorage.getItem(this.KEY);
            if (data) return { ...this.getDefault(), ...JSON.parse(data) };
        } catch (e) { console.error('Load error:', e); }
        return this.getDefault();
    },

    save(data) {
        try { localStorage.setItem(this.KEY, JSON.stringify(data)); }
        catch (e) { console.error('Save error:', e); }
    },

    completeLesson(langId, lessonNum, xpReward) {
        const data = this.load();
        const key = `${langId}-${lessonNum}`;

        if (!data.completedLessons.includes(key)) {
            data.completedLessons.push(key);
            data.xp += xpReward;
            data.totalXp += xpReward;

            while (data.xp >= 100) { data.xp -= 100; data.level++; }

            if (!data.currentLesson[langId] || lessonNum >= data.currentLesson[langId]) {
                data.currentLesson[langId] = lessonNum + 1;
            }

            const today = new Date().toDateString();
            if (data.lastPlayDate !== today) {
                const yesterday = new Date(Date.now() - 86400000).toDateString();
                data.streak = data.lastPlayDate === yesterday ? data.streak + 1 : 1;
                data.lastPlayDate = today;
            }

            this.save(data);
        }
        return data;
    },

    isCompleted(langId, lessonNum) {
        return this.load().completedLessons.includes(`${langId}-${lessonNum}`);
    },

    isUnlocked(langId, lessonNum) {
        if (lessonNum === 1) return true;
        const data = this.load();
        return (data.currentLesson[langId] || 1) >= lessonNum;
    },

    unlockAchievement(id) {
        const data = this.load();
        if (!data.achievements.includes(id)) {
            data.achievements.push(id);
            this.save(data);
            return true;
        }
        return false;
    },

    setMusic(on) {
        const data = this.load();
        data.musicOn = on;
        this.save(data);
    },

    reset() { localStorage.removeItem(this.KEY); },

    getRank(level) {
        if (level >= 25) return '👑 Code Master';
        if (level >= 20) return '💎 Expert';
        if (level >= 15) return '🔥 Advanced';
        if (level >= 10) return '⭐ Skilled';
        if (level >= 5) return '📈 Apprentice';
        return '🌱 Beginner';
    }
};

const ACHIEVEMENTS = [
    { id: 'first', icon: '🎯', name: 'First Step', desc: 'Completed your first lesson', condition: d => d.completedLessons.length >= 1 },
    { id: 'five', icon: '⭐', name: 'On the Way', desc: 'Completed 5 lessons', condition: d => d.completedLessons.length >= 5 },
    { id: 'ten', icon: '🔟', name: 'Double Digits', desc: 'Completed 10 lessons', condition: d => d.completedLessons.length >= 10 },
    { id: 'xp500', icon: '💰', name: 'XP Collector', desc: 'Earned 500 total XP', condition: d => d.totalXp >= 500 },
    { id: 'xp1000', icon: '💎', name: 'XP King', desc: 'Earned 1000 total XP', condition: d => d.totalXp >= 1000 },
    { id: 'streak3', icon: '🔥', name: 'Warmup Streak', desc: '3-day learning streak', condition: d => d.streak >= 3 },
    { id: 'streak7', icon: '🔥', name: 'Weekly Warrior', desc: '7-day learning streak', condition: d => d.streak >= 7 },
    { id: 'html_master', icon: '👑', name: 'HTML Master', desc: 'Completed all HTML lessons!', condition: d => { for(let i=1;i<=15;i++) if(!d.completedLessons.includes('html-'+i)) return false; return true; } },
];
