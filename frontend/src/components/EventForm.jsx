import React, { useState } from "react";
import "./form.css";

const EventForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            const result = await response.json();
            console.log('Ответ сервера:', result);
            alert(`Спасибо, ${formData.name}! Вы записаны на мероприятие "${formData.event}".`);
            setIsOpen(false);
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте снова.');
        }
    };

    return (
        <div className="event-form-container">
            <button onClick={toggleForm} className="open-form-button">
                Рассчитать стоимость
            </button>

            {isOpen && (
                <div className="form-overlay">
                    <div className="form-content">
                        <h2>Рассчитать</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Имя:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-button">
                                Отправить
                            </button>

                            <button type="button" onClick={toggleForm} className="cancel-button">
                                Закрыть
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventForm;
