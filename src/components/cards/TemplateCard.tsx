"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Star, Tag, User } from "lucide-react";

export interface Template {
    id: string;
    name: string;
    creator: string;
    price: number;
    rating: number;
    image: string;
    category?: string;
}

interface TemplateCardProps {
    template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
    const { name, category = "General", creator, price, rating, image } = template;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="glass"
            style={{ overflow: 'hidden', padding: 0 }}
        >
            <div style={{ height: '180px', background: 'rgba(0,0,0,0.3)', position: 'relative' }}>
                <Image src={image} alt={name} fill style={{ objectFit: 'cover', opacity: 0.8 }} unoptimized />
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(5, 5, 5, 0.6)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                    {price} Credits
                </div>
            </div>

            <div style={{ padding: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>{category}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#F59E0B' }}>
                        <Star size={12} fill="#F59E0B" /> {rating}
                    </div>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem' }}>{name}</h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.2rem' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--accent), var(--cyan))' }} />
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>by {creator}</span>
                </div>

                <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '10px' }}>
                    <ShoppingCart size={16} /> Buy Template
                </button>
            </div>
        </motion.div>
    );
}
