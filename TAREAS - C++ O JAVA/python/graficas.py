g_values = {
    "Tierra": 9.80665,   # valor convencional
    "Marte": 3.728,      # valor medio aproximado
    "Neptuno": 11.15,    # gravedad a 1 bar
    "Venus": 8.87,
    "Luna": 1.625
}

plt.figure(figsize=(8,6))
for astro in g_values:
    plt.plot(m_kg, weights[astro], marker='o', label=astro)
plt.xlabel("Masa (kg)")
plt.ylabel("Peso (N)")
plt.title("Peso (N) vs Masa (kg) en distintos astros")
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()