"""Afig la data de l'últim commit al peu global durant la construcció."""

from datetime import date
from pathlib import Path
import subprocess


MONTHS = (
    "gener",
    "febrer",
    "març",
    "abril",
    "maig",
    "juny",
    "juliol",
    "agost",
    "setembre",
    "octubre",
    "novembre",
    "desembre",
)


def on_config(config, **kwargs):
    """Actualitza el copyright sense interrompre la construcció si falta Git."""
    repository = Path(config.config_file_path).parent

    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%cs"],
            cwd=repository,
            check=True,
            capture_output=True,
            text=True,
        )
        last_update = date.fromisoformat(result.stdout.strip())
    except (OSError, subprocess.CalledProcessError, ValueError):
        return config

    formatted_date = f"{last_update.day} de {MONTHS[last_update.month - 1]} de {last_update.year}"
    config.copyright = (
        "Autor: Ferran Mas Doménech · "
        f"Última actualització: {formatted_date}"
    )
    return config
