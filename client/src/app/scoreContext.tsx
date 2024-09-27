import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScoreContextType {
    score: number;
    incrementScore: (points: number) => void; // Изменили на функцию с аргументом
    decrementScore: (points: number) => void; // Изменили на функцию с аргументом
    resetScore: () => void;
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [score, setScore] = useState<number>(0);

    const incrementScore = (points: number) => setScore((prev) => prev + points);
    const decrementScore = (points: number) => setScore((prev) => prev - points);
    const resetScore = () => setScore(0);

    useEffect(() => {
        const fetchScore = async () => {
            const response = await fetch('/api/score');
            const data = await response.json();
            setScore(data.score);
        };

        fetchScore();
    }, []);

    return (
        <ScoreContext.Provider value={{ score, incrementScore, decrementScore, resetScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export const useScore = () => {
    const context = useContext(ScoreContext);
    if (context === undefined) {
        throw new Error('useScore must be used within a ScoreProvider');
    }
    return context;
};
