# Generated by Django 4.2.16 on 2024-11-04 15:36

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_syllabus_instructors_syllabus_instructors'),
    ]

    operations = [
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('semester', models.PositiveSmallIntegerField(choices=[(1, '第1クオーター'), (2, '第2クオーター'), (3, '第3クオーター'), (4, '第4クオーター')], validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(4)])),
            ],
        ),
        migrations.CreateModel(
            name='WeekdayPeriod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weekday', models.PositiveSmallIntegerField(choices=[(0, '集中'), (1, '月曜日'), (2, '火曜日'), (3, '水曜日'), (4, '木曜日'), (5, '金曜日'), (6, '土曜日'), (7, '日曜日')], validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(7)])),
                ('period', models.PositiveSmallIntegerField(choices=[(1, '1限'), (2, '2限'), (3, '3限'), (4, '4限'), (5, '5限'), (6, '6限'), (7, '7限')], null=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(7)])),
            ],
        ),
        migrations.RenameField(
            model_name='syllabus',
            old_name='class_to_a_maximum_of_60_redit',
            new_name='class_to_a_maximum_of_60_credit',
        ),
        migrations.RemoveField(
            model_name='syllabus',
            name='period',
        ),
        migrations.RemoveField(
            model_name='syllabus',
            name='weekday',
        ),
        migrations.AlterField(
            model_name='syllabus',
            name='instructors',
            field=models.ManyToManyField(to='api.instructors'),
        ),
        migrations.AlterField(
            model_name='syllabus',
            name='number_of_credit',
            field=models.DecimalField(decimal_places=1, max_digits=2),
        ),
        migrations.RemoveField(
            model_name='syllabus',
            name='semester',
        ),
        migrations.AddField(
            model_name='syllabus',
            name='weekdat_period',
            field=models.ManyToManyField(to='api.weekdayperiod'),
        ),
        migrations.AddField(
            model_name='syllabus',
            name='semester',
            field=models.ManyToManyField(to='api.semester'),
        ),
    ]
